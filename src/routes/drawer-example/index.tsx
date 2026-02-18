import { createFileRoute } from "@tanstack/react-router";
import Container from "../../shared/layout/Container";
import SideDrawer from "../../testingComponents/sideDrawer";

export const Route = createFileRoute("/drawer-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>
        <SideDrawer />
      </div>
    </Container>
  );
}
