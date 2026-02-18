import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavMenu from "../shared/layout/NavMenu";
import { TanStackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex w-full flex-row">
      <NavMenu />
      <Outlet />
      <TanStackDevtools />
    </div>
  );
}
