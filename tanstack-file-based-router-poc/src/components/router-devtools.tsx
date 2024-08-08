import * as React from "react";

const IS_DEV = true

const RouterDevTools = IS_DEV
  ? React.lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )
  : () => null;

export { RouterDevTools };
