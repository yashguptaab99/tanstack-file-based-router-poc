import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { RouterDevTools } from '../components/router-devtools';
import { queryClient } from '../config/tanstack-query';
import { AuthContext } from '../hooks/useAuth';

export interface MyRouterContext {
  queryClient: typeof queryClient;
  authentication: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: function RootComponent() {
    return (
      <RootDocument>
        <Outlet />
      </RootDocument>
    );
  },

  errorComponent: function RootErrorComponent() {
    return (
      <RootDocument>
        <h1>ERROR</h1>
      </RootDocument>
    );
  },

  notFoundComponent: function RootNotFoundComponent() {
    return (
      <RootDocument>
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
          <h1 className='text-6xl font-bold text-red-600'>404</h1>
          <p className='mt-4 text-2xl text-gray-700'>Page Not Found</p>
          <p className='mt-2 text-gray-500'>
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href='/'
            className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
          >
            Go Back Home
          </a>
        </div>
      </RootDocument>
    );
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      {children}

      <ReactQueryDevtools
        initialIsOpen={false}
        position='bottom'
        buttonPosition='bottom-right'
      />
      <RouterDevTools position='bottom-left' />
    </React.Fragment>
  );
}
