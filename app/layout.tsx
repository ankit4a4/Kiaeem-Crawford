import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap'
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Niicellc - Premium Film Production',
  description: 'Premium cinematic film production company specializing in commercial, narrative, and documentary filmmaking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body className="bg-black text-white font-montserrat overflow-x-hidden">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}