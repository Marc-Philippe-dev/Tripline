import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="container m-auto">
      <nav className="flex justify-between items-center py-4 px-6 relative">
        <span className="text-primary">Tripline</span>
        <div className=" items-center justify-between hidden md:flex md:basis-8/12">
          <ul className="flex items-center justify-between space-x-12 ">
            <li>
              <Link href="">Acceuil</Link>
            </li>
            <li>
              <Link href="">Mission</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
          <Button className="bg-secondary hover:bg-secondary">
            {" "}
            S'inscrire{" "}
          </Button>
        </div>
        <Menu size={24} className="md:hidden" />
      </nav>
    </div>
  );
}
