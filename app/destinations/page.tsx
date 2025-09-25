import { Metadata } from 'next'
import Link from 'next/link'
import { getAllCities } from '@/lib/data'

export const metadata: Metadata = {
  title: 'All Table Tennis Hotel Destinations',
  description: 'Browse all destinations with hotels featuring table tennis facilities worldwide.',
}

export default async function DestinationsPage() {
  const cities = await getAllCities()

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            All Table Tennis Hotel Destinations
          </h1>
          <p className="text-xl text-blue-100">
            Explore our complete collection of cities with ping pong hotels
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map(city => (
          <Link key={city.slug} href={`/${city.slug}`} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-blue-900">{city.name}</div>
                <div className="text-sm text-gray-500">{city.country}</div>
              </div>
              <div className="text-sm text-gray-500">{city.hotelCount} hotels</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
