function doGet(e) {
  try {
    var params = e && e.parameter ? e.parameter : {};
    var result = approveRow_(params);
    return jsonOutput_(result);
  } catch (err) {
    return jsonOutput_({
      ok: false,
      error: err && err.message ? err.message : String(err)
    });
  }
}

function approveRow_(params) {
  var sheetId = params.sheetId;
  var sheetName = params.sheetName || '';
  var day = normalize_(params.day);
  var date = normalize_(params.date);
  var text = normalize_(params.text);
  var approvedValue = params.approvedValue || 'Approuvé';

  if (!sheetId) throw new Error('Missing sheetId');
  if (!day && !date && !text) throw new Error('Missing row identifiers');

  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = sheetName ? ss.getSheetByName(sheetName) : ss.getSheets()[0];
  if (!sheet) throw new Error('Sheet not found');

  var data = sheet.getDataRange().getDisplayValues();
  if (!data.length) throw new Error('Sheet is empty');

  var headerRowIndex = findHeaderRow_(data);
  if (headerRowIndex === -1) throw new Error('Header row not found');

  var headers = data[headerRowIndex];
  var statusCol = findCol_(headers, ['statut']);
  var dayCol = findCol_(headers, ['jour', 'day']);
  var dateCol = findCol_(headers, ['date']);
  var textCol = findCol_(headers, ['text fr', 'texte fr', 'texte', 'text', 'caption', 'legende']);

  if (statusCol === -1) throw new Error('STATUT column not found');

  for (var i = headerRowIndex + 1; i < data.length; i++) {
    var row = data[i];
    var rowDay = normalize_(cell_(row, dayCol));
    var rowDate = normalize_(cell_(row, dateCol));
    var rowText = normalize_(cell_(row, textCol));

    if (!rowDay && !rowDate && !rowText) continue;
    if (day && rowDay !== day) continue;
    if (date && rowDate !== date) continue;
    if (text && rowText.indexOf(text) !== 0) continue;

    sheet.getRange(i + 1, statusCol + 1).setValue(approvedValue);
    return {
      ok: true,
      row: i + 1,
      status: approvedValue
    };
  }

  throw new Error('Matching row not found');
}

function findHeaderRow_(rows) {
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (findCol_(row, ['jour']) !== -1 &&
        findCol_(row, ['date']) !== -1 &&
        findCol_(row, ['statut']) !== -1) {
      return i;
    }
  }
  return -1;
}

function findCol_(headers, candidates) {
  var normalized = headers.map(normalize_);
  for (var c = 0; c < candidates.length; c++) {
    var wanted = normalize_(candidates[c]);
    for (var i = 0; i < normalized.length; i++) {
      if (normalized[i].indexOf(wanted) !== -1) return i;
    }
  }
  return -1;
}

function cell_(row, index) {
  return index >= 0 && row[index] != null ? row[index] : '';
}

function normalize_(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function jsonOutput_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
