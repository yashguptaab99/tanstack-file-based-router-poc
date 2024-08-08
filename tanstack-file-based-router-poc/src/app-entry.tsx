import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from './hooks/useAuth';
import { routeTree } from './routeTree.gen';
import { queryClient } from './config/tanstack-query';

import './index.css';
import Loader from './components/Loader';
import React from 'react';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPreloadDelay:100,
  defaultViewTransition: true,
  // defaultPendingMs: 500,
  defaultPendingComponent: Loader,
  context: { authentication: undefined!, queryClient },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authentication = useAuth();

  return (
    <React.Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ authentication }} />
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default App;
