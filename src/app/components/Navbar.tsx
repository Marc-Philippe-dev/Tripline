"use client"

import { Button } from '@/components/ui/button'
import { User, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import UserDropdown from './UserDropdown'
import UserDropdownContent from './UserDropdownContent'

export default function Navbar() {
  const isAuthenticated = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container m-auto">
      <nav className="flex justify-between items-center py-4 px-6 rounded-lg bg-white shadow-2xl relative">
        <span className="text-primary text-xl font-bold">Tripline</span>

        {/* Desktop menu */}
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

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? (
                <X size={24} className="text-primary" />
            ) : (
                isAuthenticated ? (
                    <User size={24} className="text-primary" />
                ) : (
                    <Menu size={24} className="text-primary" />
                )
            )}
        </button>

            {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg md:hidden p-4">
            {isAuthenticated ? (
              <div className="flex justify-center">
                <UserDropdownContent />
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 w-full">
                  <Link href="/login">Se connecter</Link>
                </Button>
                <Button className="bg-secondary hover:bg-secondary/50 w-full">
                  <Link href="/register">S'inscrire</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}