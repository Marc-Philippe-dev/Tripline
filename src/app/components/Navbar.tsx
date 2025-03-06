"use client"

import { Button } from '@/components/ui/button'
import { Menu, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import UserDropdown from './UserDropdown'

export default function Navbar() {

  const isAuthenticated = true;

  return (
    <div className="container m-auto">
      <nav className="flex justify-between items-center py-4 px-6 rounded-lg bg-white shadow-2xl">
        <span className="text-primary text-xl font-bold">Tripline</span>

        {/* <ul className="hidden md:flex items-center space-x-12">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="">Mission</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul> */}

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <UserDropdown />
          ) : (
            <>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
                <Link href="/login">Se connecter</Link>
              </Button>
              <Button className="bg-secondary hover:bg-secondary/50">
                <Link href="/register">S'inscrire</Link>
              </Button>
            </>
          )}
        </div>

        <Menu size={24} className="md:hidden" />
      </nav>
    </div>
  );
}
