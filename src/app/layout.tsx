import type { Metadata } from 'next';
import { Archivo_Black, Lora, Radley } from 'next/font/google';
import './globals.css';

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
});

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lora',
});

const radley = Radley({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-radley',
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'Portfolio Rosa',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${lora.variable} ${radley.variable} scroll-smooth`}
    >
      <body className={archivoBlack.className}>{children}</body>
    </html>
  );
}
