"use client";
import React from 'react'
import TripsList from '../(components)/tripList'
import CreateTrip from '../(components)/createTrip'

export default function Trips() {
  return (
    <div>
      <h1 className="text-center capitalize text-gray-600">
        Bienvenu dans votre espace
      </h1>
      <div className="flex justify-center mt-10">
        <CreateTrip />
      </div>
      <div>
        <h2 className="text-center text-2xl my-10">Vos voyages</h2>
        <div className="">
          <TripsList />
        </div>
      </div>
  </div>
  )
}
