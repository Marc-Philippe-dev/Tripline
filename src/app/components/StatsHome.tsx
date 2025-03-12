"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Données factices pour les statistiques
const stats = [
  { id: 1, label: "Voyages créés", value: 1250 },
  { id: 2, label: "Pays explorés", value: 85 },
  { id: 3, label: "Utilisateurs actifs", value: 5000 },
  { id: 4, label: "Photos partagées", value: 23000 },
];

export default function InspiringStats() {
  const [displayValues, setDisplayValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValues((prevValues) =>
        prevValues.map((val, i) => Math.min(val + Math.ceil(stats[i].value / 50), stats[i].value))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container m-auto min-h-[25vh] flex items-center">
        <div className="container m-auto p-8 bg-white rounded-lg shadow-2xl">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Quelques chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              {stats.map((stat, index) => (
                <div
                key={stat.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-4xl font-bold text-blue-600">{displayValues[index]}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
