import { createFileRoute } from "@tanstack/react-router";
import Container from "../../../shared/layout/Container";
import SideDrawer from "../../../testingComponents/sideDrawer";
import BottomDrawer from "../../../testingComponents/bottomDrawer";
import StackDrawer from "../../../testingComponents/stackDrawer";
import ActionSheetDrawer from "../../../testingComponents/actionSheetDrawer";
export const Route = createFileRoute("/_protected/drawer-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="flex flex-row gap-4">
        <SideDrawer />
        <BottomDrawer />
        <StackDrawer />
        <ActionSheetDrawer />
      </div>
    </Container>
  );
}
