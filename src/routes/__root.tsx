import { Outlet, createRootRoute } from "@tanstack/react-router";

import { TanStackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex w-full flex-row">
      <Outlet />
      <TanStackDevtools />
    </div>
  );
}
