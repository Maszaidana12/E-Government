import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "./SessionProviderWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Government",
  description: "Aplikasi Website Masyarakat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <main className="bg-white min-h-screen">
           <SessionProviderWrapper> {children}</SessionProviderWrapper>
          </main>
      </body>
    </html>
  );
}
