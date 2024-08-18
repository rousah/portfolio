import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: "Portfolio Rosa",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivoBlack.className}>{children}</body>
    </html>
  );
}
