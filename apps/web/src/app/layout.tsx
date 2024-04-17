import { ReactQueryProviders, defaultMetadata } from '@igot.ai/client';
import './global.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = defaultMetadata as Metadata;

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
