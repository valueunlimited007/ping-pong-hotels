import Image from 'next/image'

type Hotel = {
  id?: string
  name: string
  description?: string
  pingPongDetails?: string
  rating?: number
  priceFrom?: number
  currency?: string
  image?: string
  bookingUrl?: string
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  // Bild-fallback om du ännu inte har riktiga URLs i datan
  const hasHttp = typeof hotel.image === 'string' && /^https?:\/\//i.test(hotel.image)
  const imgSrc = hasHttp
    ? hotel.image!
    : 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop'

  return (
    <article className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden hover:shadow-md transition">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={imgSrc}
          alt={hotel.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={false}
        />
        {typeof hotel.rating === 'number' && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {hotel.rating.toFixed(1)}/10
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{hotel.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {hotel.pingPongDetails || hotel.description || 'Table tennis available.'}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            {hotel.priceFrom != null && hotel.currency ? (
              <>
                <div className="text-gray-500">From</div>
                <div className="font-semibold">
                  {hotel.currency} {hotel.priceFrom}
                </div>
              </>
            ) : (
              <div className="text-gray-400">Price on partner site</div>
            )}
          </div>

          {hotel.bookingUrl ? (
            <a
              href={hotel.bookingUrl}
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md px-3 py-2"
            >
              Check prices →
            </a>
          ) : (
            <span className="text-gray-400 text-sm">No link yet</span>
          )}
        </div>
      </div>
    </article>
  )
}
