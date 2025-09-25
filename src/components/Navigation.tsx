'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="font-bold text-lg">🏓 Ping Pong Hotels</Link>

          <div className="hidden md:flex gap-6 text-sm">
            <Link href="/destinations" className="hover:text-blue-200">All destinations</Link>
            <Link href="/about" className="hover:text-blue-200">About</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-3 space-y-2 text-sm">
            <Link href="/destinations" className="block hover:text-blue-200">All destinations</Link>
            <Link href="/about" className="block hover:text-blue-200">About</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
