import type { Metadata } from 'next';
import { Nunito_Sans, Playfair_Display } from 'next/font/google';
import { Footer } from '../components/layout/Footer';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ThemeProvider } from '../providers/ThemeProvider';
import { site } from '../data/site';
import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.hero.description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: site.title,
    description: site.hero.description,
    url: '/',
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: '/images/profile/profile-image.png',
        width: 407,
        height: 408,
        alt: 'Merna Hallak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.hero.description,
    images: ['/images/profile/profile-image.png'],
  },
};

const themeScript = `(() => {
  try {
    const savedTheme = localStorage.getItem('merna-portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', savedTheme === 'dark' || (!savedTheme && prefersDark));
  } catch (_) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${playfairDisplay.variable} min-h-screen`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
