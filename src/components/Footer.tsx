import Link from 'next/link'
import { getAllCities } from '@/lib/data'

export default async function Footer() {
  const cities = await getAllCities()
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-3">About Ping Pong Hotels</h3>
          <p className="text-sm mb-3">
            The world's largest directory of hotels with table tennis facilities. 
            122+ verified hotels across 25 cities worldwide.
          </p>
        </div>
        
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Top Destinations</h3>
            <ul className="space-y-2">
              {cities.slice(0, 8).map(c => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-white text-sm">
                    {c.name} ({c.hotelCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">More Cities</h3>
            <ul className="space-y-2">
              {cities.slice(8, 16).map(c => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-white text-sm">
                    {c.name} ({c.hotelCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/destinations" className="hover:text-white">All Destinations</Link></li>
            <li><Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Ping Pong Hotels - Find Your Perfect Table Tennis Hotel</p>
      </div>
    </footer>
  )
}
