import Image from "next/image";
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page404() {
  return (
    <section>
      <div className="container m-auto grid place-items-center max-h-[80vh]">
        <div>
          <Image
            src="/404.svg"
            alt="404 illustration"
            width={1200}
            height={1200}
          ></Image>
        </div>
        <div className="mb-[5vh] text-center">
          <h2>La page que vous cherchez n'existe pas.</h2>
        </div>
        <div>
          <Button className="bg-secondary hover:bg-secondary hover:shadow-2xl rounded-full px-12 py-10 text-2xl">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}