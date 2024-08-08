import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "../../../../route";
import LoginPage from "./LoginPage";
import { z } from "zod";

export const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    validateSearch: z.object({
      redirect: z.string().optional().catch(''),
    }),
    beforeLoad: ({ context, search }) => {
      const { isLogged } = context.authentication;
      if (isLogged()) throw redirect({ to: search.redirect || '/' });
    },
    component: LoginPage,
  });