import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/')({ 
  component: function Dashboard() {
    return (
      <div className='bg-gray-100 font-sans leading-normal tracking-normal min-h-screen'>
        <main className='flex-1 p-6'>
          <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h2 className='font-bold text-xl mb-2'>Card 1</h2>
              <p className='text-gray-700'>Some content for card 1</p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h2 className='font-bold text-xl mb-2'>Card 2</h2>
              <p className='text-gray-700'>Some content for card 2</p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h2 className='font-bold text-xl mb-2'>Card 3</h2>
              <p className='text-gray-700'>Some content for card 3</p>
            </div>
          </div>
        </main>
      </div>
    );
  },
});
