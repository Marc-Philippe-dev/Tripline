import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="container m-auto">
      <nav className="flex justify-between items-center ml-2 mr-2 py-4 px-6 rounded-full bg-white shadow-2xl">
        <span className="text-black text-xl font-bold">Tripline</span>

        <ul className="hidden md:flex items-center space-x-12">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="">Mission</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
            <Link href="/login">Se connecter</Link>
          </Button>
          <Button className="bg-secondary hover:bg-secondary/50">
            <Link href="/register">S'inscrire</Link>
          </Button>
        </div>

        <Menu size={24} className="md:hidden" />
      </nav>
    </div>
  );
}
