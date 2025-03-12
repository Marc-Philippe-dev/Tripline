"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DashboardSideBar from "./(components)/DashboardSideBar";
import "../globals.css";
import ProtectedRoutes from "@/utils/protectedRoutes";
import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "@/models/IUser";

// Variables for the Geist Sans and Geist Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Tripline",
//   description: "Transformez vos aventures en souvenirs inoubliables",
// }; 


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [userData, setUserData] = useState<IUser | null>(null);
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/profile`,
          { withCredentials: true }
        );
        setUserData(response.data); 
      }
      catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative grid grid-rows[auto_1fr_auto] min-h-screen wrapper  `}
      >
        <ProtectedRoutes>
          <div className="grid grid-cols-5 grid-rows-10 gap-1 min-h-screen ">
            <div className="row-span-10 bg-blue-200/50 rounded-lg m-2">
              <DashboardSideBar />
            </div>
            <div className="col-span-4 bg-blue-200/50 p-2 rounded-lg m-2">
              <div className="flex justify-end items-center gap-4 pr-6">
                <p>Bienvenu <span className="text-primary">{userData?.name}</span></p>
                <img
                  src={userData?.profile.photo}
                  alt="profile image"
                  className="size-10 rounded-full"
                />
              </div>
            </div>
            <div className="col-span-4 row-span-9 col-start-2 p-6 row-start-2 bg-blue-200/50 rounded-lg m-2">
              {children}
            </div>
          </div>
        </ProtectedRoutes>
      </body>
    </html>
  );
}
