export default function About() {
  return (
    <main className="bg-gradient-to-br from-blue-600 to-blue-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Ping Pong Hotels</h1>
        
        <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">The World's Largest Ping Pong Hotel Directory</h2>
          <p className="text-lg mb-4">
            With 122+ hotels across 25 cities worldwide, we're bigger than any competitor - 
            including Ted Valentin's ping-pong-hotels.com (40 hotels in 10 cities).
          </p>
          <p className="text-lg">
            From Bangkok hostels to NYC luxury hotels, we help table tennis enthusiasts 
            find the perfect accommodation with ping pong facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">122+</div>
            <div>Hotels with Table Tennis</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">25</div>
            <div>Cities Worldwide</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div>Verified Facilities</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why We're Different</h2>
          <ul className="space-y-3 text-lg">
            <li>✓ Real-time availability from trusted booking partners</li>
            <li>✓ Detailed ping pong facility descriptions</li>
            <li>✓ Global coverage - not just US/Europe</li>
            <li>✓ Mobile-optimized for travelers on the go</li>
            <li>✓ Growing daily with new destinations</li>
          </ul>
        </div>
      </div>
    </main>
  )
}