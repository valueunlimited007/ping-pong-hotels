import Link from 'next/link'
import HotelCard from '@/components/HotelCard'
import { getAllCities, getHotelsByCity } from '@/lib/data'

interface Props { params: Promise<{ city: string }> }

// DENNA FUNKTION BEHÖVS FÖR STATIC EXPORT!
export async function generateStaticParams() {
  const cities = await getAllCities()
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params
  const cities = await getAllCities()
  const city = cities.find(c => c.slug === citySlug)
  const hotels = await getHotelsByCity(citySlug)
  
  if (!city) return <main className="p-6">City not found</main>
  
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-blue-100 hover:text-white">← Back</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{city.name} - Ping Pong Hotels</h1>
          <p className="text-blue-100 mt-4 max-w-3xl">
            Discover the best hotels with table tennis facilities in {city.name}. 
            From budget hostels to luxury resorts, all our {city.hotelCount} listed properties 
            have confirmed ping pong amenities for sports enthusiasts and recreational players.
          </p>
          <p className="text-blue-200 mt-3 text-lg font-semibold">{city.hotelCount} hotels with table tennis</p>
        </div>
      </section>
      
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* SEO-friendly intro section */}
        <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">Table Tennis Hotels in {city.name}, {city.country}</h2>
          <p className="text-gray-600">
            Looking for accommodation with ping pong facilities in {city.name}? 
            Browse our curated selection of {city.hotelCount} hotels, hostels, and resorts 
            that feature table tennis amenities. Perfect for sports lovers visiting {city.country}.
          </p>
        </div>
        
        {hotels.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map(h => <HotelCard key={h.id ?? h.name} hotel={h} />)}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-gray-600">
            No hotels listed yet for {city.name}.
          </div>
        )}
      </div>
    </main>
  )
}// Force rebuild
