import axios from "axios";
<<<<<<< HEAD:src/services/tripServices.ts
import {ITrip } from "../models/trip";
=======
import { ITrip } from "../../models/ITrip";
>>>>>>> d8cc5e6394643418fe49dcc6803f8e95917c95ed:src/app/services/tripServices.ts

import { create } from "zustand";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface TripStore {
  selectedTripId: string | null;
  setTripId: (id: string) => void;
}

// Service function to fetch all trips
export const getAllTrips = async (): Promise<ITrip[]> => {
<<<<<<< HEAD:src/services/tripServices.ts
	try {
		const response = await axios.get(`${API_BASE_URL}/api/trips`, { withCredentials: true });
		// Return the list of trips
		return response.data; 
	} catch (error) {
		console.error("Error fetching trips:", error);
		// Throw an error to be handled by the component
		throw error; 
	}
=======
  try {
    const response = await axios.get(`${API_BASE_URL}/api/trips`, { withCredentials: true });
    return response.data; // Return the list of trips
  } catch (error) {
    console.error("Error fetching trips:", error);
    throw error; // Throw an error to be handled by the component
  }
>>>>>>> d8cc5e6394643418fe49dcc6803f8e95917c95ed:src/app/services/tripServices.ts
};


export const useTripStore = create<TripStore>((set) => ({
  selectedTripId: null,
  setTripId: (id) => set({ selectedTripId: id }),
}));

export const deleteTrip = async (id:string): Promise<void> => {
	try {
		const response = await axios.delete(`${API_BASE_URL}/api/trips/${id}`, { withCredentials: true });
		// Return the list of trips
		return response.data; 
	} catch (error) {
		console.error("Error deleting this trip :", error);
		// Throw an error to be handled by the component
		throw error; 
	}
};
