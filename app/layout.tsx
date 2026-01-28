import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume - Monsiree Tassanakatithum",
  description: "Resume of Monsiree Tassanakatithum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="container mx-auto px-4 md:px-6 py-8 md:py-16 print:p-0">
          <div className="max-w-4xl mx-auto print:w-full print:max-w-full print:mx-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
