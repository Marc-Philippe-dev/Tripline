import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Components
 

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative grid grid-rows[auto_1fr_auto] min-h-screen wrapper`}>

        <div className="mt-10">
          <Navbar />
        </div>

        <main className=" mb-16">
          {children}
        </main>

        <footer className="w-full py-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
