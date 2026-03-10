import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "../../../shared/ui/Toast";
import Container from "../../../shared/layout/Container";
import { ToastButton } from "../../../shared/ui/Toast";

export const Route = createFileRoute("/_protected/toaster/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <Toaster>
        <ToastButton />
      </Toaster>
    </Container>
  );
}
