import type { Metadata } from 'next';
import { Nunito_Sans, Playfair_Display, Poppins } from 'next/font/google';
import { Footer } from '../components/layout/Footer';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ThemeProvider } from '../providers/ThemeProvider';
import { site } from '../data/site';
import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.hero.description,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: site.title,
    description: site.hero.description,
    type: 'website',
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
      <body
        className={`${nunitoSans.variable} ${poppins.variable} ${playfairDisplay.variable} min-h-screen`}
      >
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
