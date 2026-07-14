import crypto from 'crypto';

export const BICOM_COOKIE = 'bicom_auth';
export const BICOM_MAX_AGE = 60 * 60 * 24 * 30; // 30 jours

/**
 * Jeton de session dérivé du mot de passe.
 * Le client ne peut pas le forger : il faudrait connaître BICOM_PASSWORD,
 * qui ne quitte jamais le serveur.
 */
export function sessionToken() {
  const pwd = process.env.BICOM_PASSWORD || '';
  if (!pwd) return null;
  return crypto.createHmac('sha256', pwd).update('bicom-v1').digest('hex');
}

/** Comparaison à temps constant — évite de fuiter le mot de passe par la durée de la réponse. */
export function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a ?? '')).digest();
  const hb = crypto.createHash('sha256').update(String(b ?? '')).digest();
  return crypto.timingSafeEqual(ha, hb);
}

/** Le cookie présenté correspond-il au jeton attendu ? */
export function isAuthorized(request) {
  const expected = sessionToken();
  if (!expected) return false;
  const got = request.cookies.get(BICOM_COOKIE)?.value;
  if (!got) return false;
  return safeEqual(got, expected);
}
