"use client"

import { User} from 'lucide-react'
import { useState } from 'react'
import UserDropdownContent from './UserDropdownContent'

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
                    <UserDropdownContent />
                </div>
            )}
        </div>
    )
}