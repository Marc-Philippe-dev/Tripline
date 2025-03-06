"use client"

import { User, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            {/* Dropdown button */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <User className="h-6 w-6 text-primary" />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute right-0 mt-6 w-48 bg-white rounded-md shadow-lg py-1 z-50">

                    <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                        Mon compte
                    </div>

                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profil</span>
                    </Link>
                    
                    <Link href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Paramètres</span>
                    </Link>

                    <div className="border-t my-1"></div>

                    <Link href="/logout" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Déconnexion</span>
                    </Link>
                </div>
            )}
        </div>
    )
}