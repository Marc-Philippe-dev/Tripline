"use client";
import { getAllTrips, useTripStore } from "../../services/tripServices";
import { ITrip } from "../../../models/trip";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TripsList = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { setTripId } = useTripStore();
  const router = useRouter();

  const handleClick = (id: string) => {
    setTripId(id); // Store trip ID in the service
    router.push(`/dashboard/trips/entries`); // Navigate to the detail page
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripData = await getAllTrips();
        setTrips(tripData);
      } catch (err) {
        setError("Failed to fetch trips"); // Handle any errors
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchTrips();
  }, []);

  // Render loading or error state
  if (loading) {
    return <div>Loading trips...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {trips.length === 0 ? (
        <p>Vous n'avez pas encore de voyages</p>
      ) : (
        <div className="">
          {trips.map((trip) => (
            <div
              className="flex flex-col items-start justify-center bg-secondary/70 gap-2 rounded-md "
              key={trip._id}
            >
              <img
                src={trip.coverImage}
                alt="trip cover image "
                className="rounded-t-md"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-white">{trip.title}</h3>
                <p className="text-white">{trip.description}</p>
                <p className="text-white">
                  Date début:{" "}
                  {trip.startDate
                    ? new Date(trip.startDate).toLocaleDateString()
                    : "N/A"}
                </p>
                <p className="text-white">
                  Date fin:{" "}
                  {trip.endDate
                    ? new Date(trip.endDate).toLocaleDateString()
                    : "N/A"}
                </p>
                <p className="text-white">{trip.description}</p>
                <Link
                  href={`dashboard/trips/entries`}
                  onClick={() => handleClick(trip._id as string)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Voir les étapes
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripsList;
