import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="container m-auto text-black">
      <div className="mx-2 py-4 px-10 mb-[2vh] flex justify-between items-center rounded-2xl bg-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3>Tripline</h3>
            <p>Transformez vos aventures en souvenirs inoubliables.</p>
            <p>Et partagez les.</p>
          </div>
          <div>
            <h3>Liens utiles</h3>
            <ul className="text-slate-500">
              <li>
                <Link href="/">Acceuil</Link>
              </li>
              <li>
                <Link href="">Mission</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Newsletter</h3>
            <p>Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour.</p>
            <form action="" method="post">
              <input type="email" placeholder="Entrez votre email" />
              <Button className="ml-1 bg-secondary hover:bg-secondary">Tenez moi au courant !</Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}