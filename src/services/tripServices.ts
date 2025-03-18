import axios from "axios";
import {ITrip } from "../models/trip";

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
		// Return the list of trips
		return response.data; 
	} catch (error) {
		console.error("Error fetching trips:", error);
		// Throw an error to be handled by the component
		throw error; 
	}
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
