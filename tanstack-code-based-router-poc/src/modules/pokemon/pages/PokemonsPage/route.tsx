import { createRoute } from '@tanstack/react-router';
import PokemonsPage from './PokemonsPage';
import { privateRoute } from '../../../../route';
import { fetchAllPokemon } from '../../../../data/queries';
import PokemonsSkeleton from '../../components/PokemonsSkeleton';

export const pokemonsRoute = createRoute({
  getParentRoute: () => privateRoute,
  path: '/pokemons',
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(fetchAllPokemon());
  },
  pendingComponent: PokemonsSkeleton,
  component: PokemonsPage,
});
