import { createRoute } from '@tanstack/react-router';
import { privateRoute } from '../../../../route';
import DashboardPage from './DashboardPage';

export const dashboardRoute = createRoute({
  getParentRoute: () => privateRoute,
  path: '/',
  component: DashboardPage
});
