

export default function PokemonSkeleton() {
    return (
      <div className='container mx-auto p-4 py-10 max-w-lg'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='p-6'>
            <div className='animate-pulse'>
              <div className='h-8 bg-gray-300 rounded w-3/4 mx-auto mb-4'></div>
              <div className='flex justify-center mb-6'>
                <div className='w-32 h-32 bg-gray-300 rounded-full'></div>
              </div>
              <dl className='text-center'>
                <div className='mb-4'>
                  <dt className='h-4 bg-gray-300 rounded w-1/3 mx-auto mb-2'></dt>
                  <dd className='h-6 bg-gray-300 rounded w-2/3 mx-auto'></dd>
                </div>
                <div className='mb-4'>
                  <dt className='h-4 bg-gray-300 rounded w-1/3 mx-auto mb-2'></dt>
                  <dd className='h-6 bg-gray-300 rounded w-2/3 mx-auto'></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }