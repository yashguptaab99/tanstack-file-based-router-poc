export default function PokemonsSkeleton() {
    
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-3xl font-bold text-center mb-6'>Pokemons</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {Array.from({ length: 12 }).map((_, index) => (
          <div className='bg-gray-200 animate-pulse shadow-md rounded-lg overflow-hidden' key={index}>
            <div className='p-4'>
              <div className='flex items-center justify-center'>
                <div className='bg-gray-300 w-24 h-24 rounded-full'></div>
              </div>
              <div className='mt-4'>
                <div className='bg-gray-300 h-6 w-3/4 mx-auto rounded'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
