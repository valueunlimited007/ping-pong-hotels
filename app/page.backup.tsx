import Link from 'next/link'
import { getAllCities } from '../src/data/hotels-database'

import { getAllCities } from '@/data/hotels-database' // funkar om @ pekar på src/

export default function Home() {
  const cities = getAllCities()
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🏓 Ping Pong Hotels</h1>
      <p className="mb-6 text-gray-600">Välj en destination.</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cities.map((c:any) => (
          <li key={c.slug} className="border rounded p-4 hover:shadow">
            <Link href={`/${c.slug}`} className="font-semibold">{c.name}</Link>
            <div className="text-sm text-gray-500">{c.hotelCount} hotell</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
