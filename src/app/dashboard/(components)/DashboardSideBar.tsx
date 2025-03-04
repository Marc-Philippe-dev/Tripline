"use client";
import { HomeIcon, LogOut, NotebookPen, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardSideBar() {
  return (
    <div className="h-full py-4 px-3 grid grid-rows-[auto_1fr_auto] ">
      <div className="text-gray-600 text-center uppercase  mb-7"> Tripline</div>
      <div className="flex flex-col gap-6">
        <div className="  bg-secondary/80 hover:bg-secondary/100 px-2 py-4 rounded-lg ">
          <Link href="/dashboard" className="flex items-center gap-4 ">
            <HomeIcon className="text-gray-100" />
            <span className="text-gray-100">Dashboard</span>
          </Link>
        </div>
        <div className="  bg-secondary/80 hover:bg-secondary/100 px-2 py-4 rounded-lg ">
          <Link href="/dashboard/trips" className="flex items-center gap-4 ">
            <NotebookPen className="text-gray-100" />
            <span className="text-gray-100">Voyages</span>
          </Link>
        </div>
        <div className="  bg-secondary/80 hover:bg-secondary/100 px-2 py-4 rounded-lg ">
          <Link href="/dashboard/profile" className="flex items-center gap-4 ">
            <User className="text-gray-100" />
            <span className="text-gray-100">Profil</span>
          </Link>
        </div>

        <div className="  bg-secondary/80 hover:bg-secondary/100 px-2 py-4 rounded-lg ">
          <Link href="/" className="flex items-center gap-4 ">
            <Settings className="text-gray-100" />
            <span className="text-gray-100">Paramètres</span>
          </Link>
        </div>
      </div>
      <div>
        <div className="  bg-secondary/80 hover:bg-secondary/100 px-2 py-4 rounded-lg ">
          <Link href="/" className="flex items-center gap-4 ">
            <LogOut className="text-gray-100" />
            <span className="text-gray-100">Déconnexion</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
