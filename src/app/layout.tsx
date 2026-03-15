import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "I.E. Sanchirio Palomar - Educación Primaria y Secundaria",
  description: "Formando líderes con valores y excelencia académica desde hace más de 25 años. Educación Primaria y Secundaria de calidad en Sanchirio Palomar.",
  keywords: ["Educación", "Primaria", "Secundaria", "Sanchirio Palomar", "Colegio", "Lima"],
  authors: [{ name: "I.E. Sanchirio Palomar" }],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
