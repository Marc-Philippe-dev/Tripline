"use client";

import { Button } from "@/components/ui/button";

export default function StartYourJourney() {
  return (
    <section>
      <div className="container m-auto min-h-[25vh] flex items-center">
        <div className="container m-auto p-8 bg-white rounded-lg shadow-2xl">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold">Commence ton aventure aujourd’hui</h2>
            <p className="mt-4 text-lg">Crée ton journal de voyage interactif et partage tes souvenirs !</p>
            <Button className="mt-8 w-72 h-20 text-2xl">Inscris-toi maintenant !</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
