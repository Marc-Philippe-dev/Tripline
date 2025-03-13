import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import heroImage from "../../assets/images/hero.png";
import coupleImage from "../../assets/images/couple_travelling.png"; 

const TriplinePage = () => {

	const navigate = useNavigate();

	const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="bg-blue-50 min-h-screen font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-blue-500 font-bold text-xl">Tripline</div>
        <div>
          {isAuthenticated ? (
            // Afficher l'icône utilisateur quand connecté
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-blue-500 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          ) : (
            // Afficher les boutons quand non connecté
            <>
              <button
                className="bg-orange-400 text-white px-4 py-2 rounded-md"
                onClick={() => navigate("/login")}
              >
                Se connecter
              </button>
              <button
                className="bg-orange-400 text-white px-4 py-2 rounded-md ml-8"
                onClick={() => navigate("/signUp")}
              >
                S'inscrire
              </button>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-wrap lg:flex-nowrap items-center">
        <div className="lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Transformez vos aventures en souvenirs inoubliables.
            <br />
            <span className="block mt-2">Et partagez les.</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Les expériences de voyage deviennent plus précieuses lorsque nous
            les partageons
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="rounded-full bg-blue-100 p-6 relative">
            <img
              src={heroImage}
              alt="Voyageur avec sac à dos"
              className="relative z-10"
            />
            <div className="absolute top-10 right-10 bg-white rounded-lg px-4 py-2 shadow-sm flex items-center z-20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Horaire • Bali</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-400 rounded-full"></div>
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Destinations Populaires
        </h2>
        <p className="text-gray-600 mb-8">
          Découvrez les destinations les plus aimées des filtres de voyages
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Flores Road Trip 2D2N",
              location: "3 Days",
              price: "4.750",
              image: img1,
            },
            {
              name: "Karimun Giliyang O2 Bogor",
              location: "3 Days",
              price: "3.250",
              image: img2,
            },
            {
              name: "Paket Ulun Danu Beratan Jatiluwih Bali",
              location: "4 Days",
              price: "550",
              image: img3,
            },
            {
              name: "Desa Wisata Kandri",
              location: "3 Days",
              price: "1.680",
              image: img4,
            },
          ].map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{destination.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {destination.location}
                </p>
                <p className="text-blue-500 font-medium">
                  Rp {destination.price}{" "}
                  <span className="text-gray-400 text-sm">/person</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-12 flex flex-wrap lg:flex-nowrap items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={coupleImage}
            alt="Couple voyageant avec des valises"
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission</h2>
          <p className="text-gray-600 mb-8">
            Nous croyons que chaque voyage est une histoire unique qui mérite
            d'être racontée. Nous avons...
          </p>

          {/* Values */}
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Authenticité</h3>
                <p className="text-gray-600">
                  Encourager des récits de voyage sincères et personnels.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Simplicité</h3>
                <p className="text-gray-600">
                  Une interface intuitive, efficace et facile à utiliser.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Confidentialité</h3>
                <p className="text-gray-600">
                  Garantir la protection des données et la sécurité pour nos
                  utilisateurs sur tous niveaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TriplinePage;
