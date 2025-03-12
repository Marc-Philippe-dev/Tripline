"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const icons = ["/globe.svg", "/airplane.svg", "/ticket.svg"]; // Remplace par tes propres icônes
const iconSize = 50; // Taille d'un SVG (à ajuster)

export default function BackgroundIcons() {
  const [numIcons, setNumIcons] = useState(0);

  useEffect(() => {
    const updateNumIcons = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const columns = Math.ceil(screenWidth / iconSize);
      const rows = Math.ceil(screenHeight / iconSize);
      setNumIcons(columns * rows);
    };

    updateNumIcons(); // Calcul au chargement
    window.addEventListener("resize", updateNumIcons); // Recalcul lors d'un resize

    return () => window.removeEventListener("resize", updateNumIcons);
  }, []);


  return (
    <div className="absolute inset-0 w-full h-full bg-gray-50 overflow-hidden">
      <div className="flex flex-wrap">
        {[...Array(numIcons)].map((_, i) => (
          <motion.img
            key={i}
            src={icons[i % icons.length]} // Alterne les icônes
            className="w-[50px] h-[50px] m-11 opacity-30"
            initial={{ y: 0, opacity: 0.1 }}
            animate={{
              y: [0, -10, 0], // Flottement
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2, // Variation des timings
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
