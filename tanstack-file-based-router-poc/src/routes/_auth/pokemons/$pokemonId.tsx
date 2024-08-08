import { createFileRoute } from '@tanstack/react-router';
import { fetchPokemonById } from '../../../data/queries';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/_auth/pokemons/$pokemonId')({
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData(fetchPokemonById(params.pokemonId));
  },
  pendingComponent: PokemonSkeleton,
  component: Pokemon,
});

function PokemonSkeleton() {
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

function Pokemon() {
  const { pokemonId } = Route.useParams();
  const { data } = useSuspenseQuery(fetchPokemonById(pokemonId));

  return (
    <div className='container mx-auto p-4 py-10 max-w-lg'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='p-6'>
          <h2 className='text-2xl font-bold text-center mb-4'>
            ({pokemonId}) {data.name}
          </h2>
          <div className='flex justify-center mb-6'>
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className='w-32 h-32'
            />
          </div>
          <dl className='text-center'>
            <div className='mb-4'>
              <dt className='font-semibold text-gray-700'>Height</dt>
              <dd className='text-gray-900'>{data.height} decimeters</dd>
            </div>
            <div className='mb-4'>
              <dt className='font-semibold text-gray-700'>Weight</dt>
              <dd className='text-gray-900'>{data.weight} hectograms</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
