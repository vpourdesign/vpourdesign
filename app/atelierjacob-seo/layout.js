export const metadata = {
  title: 'Plan SEO — Ateliers Jacob × V pour Design',
  description: 'Document de travail privé.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function AtelierJacobLayout({ children }) {
  return children;
}
