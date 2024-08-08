import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: function AuthLayout() {
    return <Outlet />;
  },
})