import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAllPokemon } from "../../../../data/queries";
import { Link } from "@tanstack/react-router";

export default function PokemonsPage() {
    const { data } = useSuspenseQuery(fetchAllPokemon());
    return (
      <div className='container mx-auto p-4'>
        <h2 className='text-3xl font-bold text-center mb-6'>Pokemons</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.map((pokemon) => (
            <div
              key={pokemon.id}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <Link
                to={`/pokemons/${pokemon.id}`}
                className='block p-4 hover:bg-gray-100'
              >
                <div className='flex items-center justify-center'>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name}
                    className='w-24 h-24'
                  />
                </div>
                <h3 className='text-xl font-semibold text-center mt-4'>
                  {pokemon.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}