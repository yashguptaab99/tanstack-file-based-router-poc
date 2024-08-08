import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "../../../../data/queries";
import { pokemonDetailRoute } from "./route";

export default function PokemonDetailsPage() {
    const { pokemonId } = pokemonDetailRoute.useParams();
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