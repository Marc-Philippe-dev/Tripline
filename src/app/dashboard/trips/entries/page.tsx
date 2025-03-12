"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useTripStore } from "@/app/services/tripServices";
import { IEntry } from "@/models/IEntry";

export default function TripDetailPage() {
  const { selectedTripId } = useTripStore();
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedTripId) return;
    const fetchTripEntries = async () => {
      console.log("fetching trip entries", selectedTripId);

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trips/${selectedTripId}/entries`,
          { withCredentials: true }
        );
        setEntries(response.data);
      } catch (err) {
        setError("Failed to fetch trip entries.");
      } finally {
        setLoading(false);
      }
    };

    fetchTripEntries();
  }, [selectedTripId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl tex-gray-600 font-bold  text-center mb-8">Etapes du voyage</h1>

      <div className="max-w-md rounded-md bg-primary/50 pb-8">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry._id} className="rounded-md flex flex-col gap-2 ">
              {entry.imgUrls && (
                <img
                  src={entry.imgUrls[0]}
                  alt={entry.destinationName}
                  className="w-full h-48 object-cover rounded-t-md "
                />
              )}

              <div className="flex flex-col p-4 gap-2 ">
                <h2 className="text-xl font-semibold">{entry.destinationName}</h2>
                <p className="mt-2">{entry.destinationDescription}</p>
              </div>

            </div>
          ))
        ) : (
          <p>No entries found for this trip.</p>
        )}
      </div>
    </div>
  );
}
