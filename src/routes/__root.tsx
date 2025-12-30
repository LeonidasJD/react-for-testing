import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavMenu from "../shared/layout/NavMenu";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <NavMenu />
      <Outlet />
    </React.Fragment>
  );
}
