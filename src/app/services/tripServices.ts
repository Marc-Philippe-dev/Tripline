import axios from "axios";
import {ITrip } from "../../models/trip";

import { create } from "zustand";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface TripStore {
	selectedTripId: string | null;
	setTripId: (id: string) => void;
}

// Service function to fetch all trips
export const getAllTrips = async (): Promise<ITrip[]> => {
	try {
		const response = await axios.get(`${API_BASE_URL}/api/trips`, { withCredentials: true });
		return response.data; // Return the list of trips
	} catch (error) {
		console.error("Error fetching trips:", error);
		throw error; // Throw an error to be handled by the component
	}
};


export const useTripStore = create<TripStore>((set) => ({
	selectedTripId: null,
	setTripId: (id) => set({ selectedTripId: id }),
}));
