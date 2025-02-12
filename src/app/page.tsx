import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section>
        <div className="container m-auto min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1>
              Transformez vos aventures en souvenirs inoubliables. Et partagez
              les.
            </h1>
            <p className=" mt-6">
              Les expériences de voyage deviennent plus précieuses lorsque nous
              les partageons
            </p>
          </div>
          <div>
            <Image
              src="/hero-image.svg"
              alt="hero image"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="container m-auto min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <Image
              src="/illustration.svg"
              alt="people with suitcase "
              width={500}
              height={500}
            ></Image>
          </div>

          <div>
            <h2>Mission</h2>
            <p>
              Nous croyons que chaque voyage est une histoire unique qui mérite
              d'être racontée. Nous visons:
            </p>

            <div className="space-y-4 mt-6 bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center space-x-4">
                <Image
                  src="/flight.svg"
                  alt="checkmark"
                  width={60}
                  height={60}
                ></Image>
                <div>
                  <h3>Authenticité</h3>
                  <p>Encourager des récits de voyage sincères et personnels.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6 bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center space-x-4">
                <Image
                  src="/simplicity.svg"
                  alt="checkmark"
                  width={60}
                  height={60}
                ></Image>
                <div>
                  <h3>Simplicité</h3>
                  <p>
                    Offrir une interface utilisateur intuitive et facile à
                    utiliser.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6 bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center space-x-4">
                <Image
                  src="/privacy.svg"
                  alt="checkmark"
                  width={60}
                  height={60}
                ></Image>
                <div>
                  <h3>Confidentialité</h3>
                  <p>
                    Garantir la protection des données et le contrôle total des
                    utilisateurs sur leurs contenus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="container m-auto min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h2>Contact</h2>
            <p className=" mt-6">Veuillez nous laisser vos préoccupations</p>
            <form action="" className="mt-6 space-y-4 w-96">
               <Input type="text" placeholder="E-mail" />
               <Input type="text" placeholder="Object" />
               <Input type="text" placeholder="Saisir votre message " />
            </form>
          </div>
          <div>
            <Image
              src="/selfie.svg"
              alt="hero image"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
