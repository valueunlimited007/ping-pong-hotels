'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  
  const cities = ['bangkok', 'barcelona', 'new-york', 'paris', 'dubai', 'london']
  const suggestions = cities.filter(city => 
    city.includes(query.toLowerCase())
  ).slice(0, 5)

  const handleSearch = () => {
    const match = cities.find(c => c.includes(query.toLowerCase()))
    if (match) {
      router.push(`/${match}`)
    } else {
      alert('City not found. Browse below!')
    }
  }

  return (
    <div className="mt-8 max-w-xl mx-auto">
      <div className="flex gap-3">
        <input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-md px-4 py-3 text-gray-900 bg-white placeholder-gray-500" 
          placeholder="Search destination..." 
        />
        <button 
          onClick={handleSearch}
          className="rounded-md px-5 py-3 bg-green-500 hover:bg-green-600 font-semibold"
        >
          Search Hotels
        </button>
      </div>
      {query && suggestions.length > 0 && (
        <div className="mt-2 bg-white rounded-md shadow-lg">
          {suggestions.map(city => (
            <button
              key={city}
              onClick={() => router.push(`/${city}`)}
              className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              {city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}