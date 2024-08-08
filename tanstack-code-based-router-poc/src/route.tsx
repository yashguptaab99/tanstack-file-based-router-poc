import {
  createRootRouteWithContext,
  createRoute,
  redirect,
} from '@tanstack/react-router';
import { queryClient } from './config/tanstack-query';
import { AuthContext } from './hooks/useAuth';
import {
  RootComponent,
  RootErrorComponent,
  RootNotFoundComponent,
} from './root';
import { loginRoute } from './modules/auth/pages';
import { dashboardRoute } from './modules/dashboard/pages';
import { z } from 'zod';
import { AppShell } from './components/AppShell';
import { pokemonsRoute } from './modules/pokemon/pages';
import { pokemonDetailRoute } from './modules/pokemon/pages/PokemonDetailsPage';

export interface MyRouterContext {
  queryClient: typeof queryClient;
  authentication: AuthContext;
}

export const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
  errorComponent: RootErrorComponent,
  notFoundComponent: RootNotFoundComponent,
});

export const privateRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'private',
  beforeLoad: async ({ location, context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged())
      throw redirect({ to: '/login', search: { redirect: location.href } });
  },
  component: AppShell,
});

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public',
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    const { isLogged } = context.authentication;
    if (isLogged()) throw redirect({ to: search.redirect || '/' });
  },
});

export const routeTree = rootRoute.addChildren([
  privateRoute.addChildren([
    dashboardRoute,
    pokemonsRoute,
    pokemonDetailRoute
  ]),
  publicRoute.addChildren([loginRoute]),
]);
