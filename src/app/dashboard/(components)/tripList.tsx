
"use client";
import {
  deleteTrip,
  getAllTrips,
  useTripStore,
} from "../../../services/tripServices";
import { ITrip } from "../../../models/ITrip";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Edit, Trash } from "lucide-react";

const TripsList = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { setTripId } = useTripStore();
  const router = useRouter();

  const handleDetailsClick = (id: string) => {
    setTripId(id);
    router.push(`/dashboard/trips/entries`);
  };

  const handleDeleteTrip = async (id: string) => {
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce voyage ?"
    );
    if (!isConfirmed) return;

    try {
      await deleteTrip(id);
      setTrips((prevTrips) => prevTrips.filter((trip) => trip._id !== id));
    } catch (err) {
      setError("Échec de la suppression du voyage");
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripData = await getAllTrips();
        setTrips(tripData);
      } catch (err) {
        setError("Échec du chargement des voyages");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) {
    return <div>Chargement des voyages...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {trips.length === 0 ? (
        <p>Vous n'avez pas encore de voyages</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trips.map((trip) => (
            <div
              className="flex flex-col bg-secondary/70 gap-2 rounded-md "
              key={trip._id}
            >
              <img
                src={trip.coverImage}
                alt="trip cover image "
                className="rounded-t-md w-full h-40 object-cover"
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
                <span
                  onClick={() => handleDetailsClick(trip._id as string)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Voir les étapes
                </span>
                <div className="flex gap-6 justify-end">
                  <Edit className="text-blue-500 cursor-pointer" />
                  <Trash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDeleteTrip(trip._id as string)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripsList;
