import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AuthProvider } from '@/contexts/AuthContext';
import './globals.scss';

const iranSans = localFont({
  src: [
    {
      path: '../fonts/eot/IRANSansWeb.eot',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ttf/IRANSansWeb.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/woff/IRANSansWeb.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/IRANSansWeb.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-iran-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Authentication Dashboard',
  description: 'Next.js Authentication System with Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSans.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}