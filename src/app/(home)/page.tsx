import Image from "next/image";
import Card from "../components/Card";
import StatsHome from "../components/StatsHome";
import CTA from "../components/CTA";

export default function Home() {


    const trips: ITrip[] = [
        {
          title: "Paris",
          coverImage: "/404.svg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in accumsan risus, id placerat dolor. Curabitur purus ex, maximus vel dolor non, convallis pretium lectus. Integer sollicitudin sagittis mi id interdum. Duis metus quam, feugiat ut sodales ac, tristique ultricies nulla. Mauris vitae turpis purus. Cras congue nibh nisl, finibus auctor quam pretium eu. Cras eleifend dui in erat sollicitudin congue. Donec non mollis metus. Fusce vel nulla fringilla, facilisis felis non, tristique orci. Suspendisse quis tincidunt nulla. Integer vel vehicula odio, sit amet placerat nisi. "
        },
        {
          title: "Tokyo",
          coverImage: "/404.svg",
          description: "Voyage au pays du soleil levant"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        },
        {
          title: "New York",
          coverImage: "/404.svg",
          description: "La grande pomme"
        }
      ];


  return (
    <>

      {/* Hero section */}
      <section>
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-t from-white via-cyan-50 to-sky-100 -z-10" />
        
        <div className="container m-auto min-h-[70vh] flex items-center">

            <div className="container m-auto pl-8 p-4 grid grid-cols-1 md:grid-cols-2 items-center bg-white  rounded-lg shadow-2xl">
                <div className="space-y-4">
                    <h1>
                    Transformez vos aventures en souvenirs inoubliables.
                        <br />
                    Et partagez les.
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
                    width={1000}
                    height={1000}
                    ></Image>
                </div>
            </div>
        </div>
      </section>

      {/* Trips carousel section */}
      <section className="relative">
        <div className="container m-auto px-2 bg-white p-4 rounded-lg shadow-2xl">
          <div className="text-center mb-8">
            <h2>Voyages récents</h2>
            <p className="mt-2">Découvrez les dernières aventures partagées</p>
          </div>
          
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {trips.map((trip, index) => (
              <div key={index} className="flex-none w-65 pb-3">
                <Card 
                  title={trip.title}
                  description={trip.description}
                  coverImage={trip.coverImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  */}
      <section className="relative">

        <div className="container m-auto mt-32 min-h-[50vh] flex items-center">
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center bg-white p-4 rounded-lg shadow-2xl">
                <div className="">
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
                        d'être racontée.
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
        </div>
      </section>

      {/*  */}
      <StatsHome />

      {/*  */}
      <CTA />

    </>
  );
}
