'use client'

export default function SearchBox() {
  const handleSearch = () => {
    alert('Search coming soon! Browse cities below for now.')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-xl mx-auto flex gap-3">
      <input 
        className="flex-1 rounded-md px-4 py-3 text-gray-900 bg-white placeholder-gray-500" 
        placeholder="Search destination..." 
      />
      <button 
        type="button"
        onClick={handleSearch}
        className="rounded-md px-5 py-3 bg-green-500 hover:bg-green-600 font-semibold"
      >
        Search Hotels
      </button>
    </form>
  )
}