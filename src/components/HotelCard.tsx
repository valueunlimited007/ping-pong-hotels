import Image from 'next/image'
import { generateBookingUrl } from '@/lib/affiliates'
import type { Hotel } from '@/lib/types'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1501117716987-c8e0bd7b944b?auto=format&fit=crop&w=1600&q=80'

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const hasHttp = typeof hotel.imageUrl === 'string' && /^https?:\/\//i.test(hotel.imageUrl)
  const imgSrc = hasHttp ? hotel.imageUrl : FALLBACK_IMG

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={imgSrc}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        {typeof hotel.rating === 'number' && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">
            {hotel.rating.toFixed(1)}/10
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/>
          </svg>
          <span className="text-sm text-green-600 font-semibold">Table Tennis Available</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {hotel.pingPongDetails || hotel.description || 'Table tennis available.'}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">From</span>
            <p className="font-bold text-lg">
              {(hotel.currency || 'USD')} {hotel.priceFrom}
            </p>
          </div>
          
          <a href={generateBookingUrl(hotel.id)}
            target="_blank"
            rel="nofollow noopener"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Check Prices
          </a>
        </div>
      </div>
    </article>
  )
}
