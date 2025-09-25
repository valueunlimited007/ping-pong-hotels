import Link from 'next/link'
import { getAllCities } from '@/lib/data'
import SearchBox from '@/components/SearchBox'

export default async function Home() {
  const cities = await getAllCities()
  const featured = cities.slice(0, 12)
  
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Hotels with Table Tennis Worldwide 🏓
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Discover amazing hotels with ping pong facilities for sports enthusiasts and recreational players
          </p>
          
          {/* Search Component */}
          <SearchBox />
        </div>
      </section>
      
      {/* Featured cities */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Popular Table Tennis Hotel Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map(city => (
            <Link key={city.slug} href={`/${city.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="h-28 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{city.name}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">{city.country}</p>
                  <p className="font-semibold text-blue-700">{city.hotelCount} Hotels with Table Tennis</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/destinations" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
            View All 25 Destinations →
          </Link>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Ping Pong Hotels?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">122+</div>
              <div className="text-gray-600">Hotels Worldwide</div>
              <div className="text-sm text-gray-500 mt-2">Verified ping pong facilities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">25</div>
              <div className="text-gray-600">Cities Covered</div>
              <div className="text-sm text-gray-500 mt-2">From Bangkok to Berlin</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Confirmed Amenities</div>
              <div className="text-sm text-gray-500 mt-2">All hotels verified</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}