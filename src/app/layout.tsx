import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        <div className="fixed inset-0 bg-gradient-to-t from-sky-300 to-indigo-200 -z-10" />

        <div className="flex flex-col min-h-screen">
          <div className="min-h-[20vh] mt-[2vh]">
            <Navbar />
          </div>

          <main className="flex-1 px-8 mb-16">
            {children}
          </main>

          <footer className="w-full py-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
