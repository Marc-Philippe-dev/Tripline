"use client";
import React from "react";
import ProtectedRoutes from "@/utils/protectedRoutes";
 
import CreateTrip from "./(components)/createTrip";

export default function Dashboard() {

  return (
    <ProtectedRoutes>
      <div>
        <h1 className="text-center capitalize text-gray-600">
          Bienvenu dans votre espace
        </h1>
        <div className="flex justify-center mt-10">
         <CreateTrip />
        </div>
      </div>
    </ProtectedRoutes>
  );
}
