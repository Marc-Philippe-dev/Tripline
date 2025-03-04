import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DashboardSideBar from "./(components)/DashboardSideBar";
import "../globals.css";

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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative grid grid-rows[auto_1fr_auto] min-h-screen wrapper  `}
      >
        <div className="grid grid-cols-5 grid-rows-10 gap-1 min-h-screen ">
          <div className="row-span-10 bg-blue-200/50 rounded-lg m-2">

            <DashboardSideBar />
          </div>
          <div className="col-span-4 bg-blue-200/50 p-2 rounded-lg m-2">
            2
          </div>
          <div className="col-span-4 row-span-9 col-start-2 p-6 row-start-2 bg-blue-200/50 rounded-lg m-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
