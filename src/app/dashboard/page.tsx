"use client";
import React from "react";
import ProtectedRoutes from "@/utils/protectedRoutes";
 
import CreateTrip from "./(components)/createTrip";
import TripsList from "./(components)/tripList";

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
        <div>
          <h2 className="text-center text-2xl my-10">Vos voyages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TripsList />
          </div>
        </div>
      </div>
    </ProtectedRoutes>
  );
}
