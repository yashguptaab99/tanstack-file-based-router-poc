export const pokemonKeys = {
    all: ['pokemon'] as const,
    detail: (id: string) => [pokemonKeys.all, id] as const,
}