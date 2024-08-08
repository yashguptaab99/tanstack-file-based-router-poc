import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from './hooks/useAuth';
import { queryClient } from './config/tanstack-query';
import Loader from './components/Loader';
import { routeTree } from './route';

import './index.css';

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
