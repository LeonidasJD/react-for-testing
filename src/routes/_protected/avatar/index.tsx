import { createFileRoute } from "@tanstack/react-router";
import AvatarImage from "../../../shared/ui/Avatar";
import Container from "../../../shared/layout/Container";
export const Route = createFileRoute("/_protected/avatar/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>
        <p className="text-lg font-bold text-gray-800">Avatar</p>
        <AvatarImage src="https://github.com/shadcn.png" fallback="CN" />
      </div>
    </Container>
  );
}
