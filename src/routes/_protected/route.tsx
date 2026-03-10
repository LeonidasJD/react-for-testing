import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import isAuthenticated from "../../utils/isAuthenticated";
import NavMenu from "../../shared/layout/NavMenu";

export const Route = createFileRoute("/_protected")({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/auth/login",
      });
    }
  },
  component: ProtectedLayout,
});

function ProtectedLayout() {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
}
