import { createRoute } from '@tanstack/react-router';
import { fetchPokemonById } from '../../../../data/queries';
import PokemonDetailsPage from './PokemonDetailsPage';
import PokemonSkeleton from '../../components/PokemonDetailSkeleton';
import { privateRoute } from '../../../../route';

export const pokemonDetailRoute = createRoute({
  getParentRoute: () => privateRoute,
  path: 'pokemons/$pokemonId',
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData(fetchPokemonById(params.pokemonId));
  },
  pendingComponent: PokemonSkeleton,
  component: PokemonDetailsPage,
});
