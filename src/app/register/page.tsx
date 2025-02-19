import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Register() {
  return (
    <section>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="container m-auto grid justify-items-center">
          <h2>S'inscrire</h2>
          <form action="" className="mt-6 space-y-4 w-96">
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Mot de passe" />
            <Input type="password" placeholder="Confirmer le mot de passe" />
          </form>
          <Button className="bg-secondary hover:bg-secondary/50 my-10 space-y-4 w-96">
            <Link href="">S'inscrire</Link>
          </Button>
          <p className="text-sm">Vous avez déjà un compte ?
            <Link className="mx-3 text-blue-500" href="">Connectez-vous !</Link>
          </p>
        </div>
        <div>
          <Image
            src="/hero-image.svg"
            alt="checkmark"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
    </section >
  );
}