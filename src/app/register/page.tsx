import Image from "next/image";
import { Input } from "@/components/ui/input";

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
    </section>
  );
}