import { queryOptions } from '@tanstack/react-query';
import { pokemonKeys } from '../key-factories';

export function sleep(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type PokemonDetail = {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export function fetchPokemonById(id: string) {
  return queryOptions({
    queryKey: pokemonKeys.detail(id),
    queryFn: async (): Promise<PokemonDetail> => {
      await sleep(2000)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return await response.json();
    },
  });
}

type Pokemon = {
  id: string;
  name: string;
};

export function fetchAllPokemon() {
  return queryOptions({
    queryKey: pokemonKeys.all,
    queryFn: async (): Promise<Pokemon[]> => {
      await sleep(2000)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = (await response.json()) as {
        results: { name: string; url: string }[];
      };

      return data.results.map((r) => ({
        id: r.url.split('/').slice(-2, -1)[0],
        name: r.name,
      }));
    },
  });
}
