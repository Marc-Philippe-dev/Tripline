
import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function UserDropdownContent() {
    return (
            <div className='container'>
                <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                    Mon compte
                </div>

                <Link href="/dashboard/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                </Link>
                
                <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Paramètres</span>
                </Link>

                <div className="border-t my-1"></div>

                <Link href="/logout" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                </Link>
            </div>
            )
    }