import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar";

// Variables for the Geist Sans and Geist Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripline",
  description: "Transformez vos aventures en souvenirs inoubliables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="min-h-[70vh] linear-gradient">
          <Navbar />
        </div>

        <main className="absolute top-[30%] left-0 right-0 px-8">
          {children}
        </main>

      </body>
    </html>
  );
}
