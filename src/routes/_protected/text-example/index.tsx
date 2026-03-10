import { createFileRoute } from "@tanstack/react-router";
import Text from "../../../shared/ui/Text";
import Container from "../../../shared/layout/Container";
export const Route = createFileRoute("/_protected/text-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <Text variant="h1" color="primary" render={<h1>Hello World</h1>} />
        <Text variant="h2" color="secondary" render={<h2>Hello World</h2>} />
        <Text variant="h3" color="muted" render={<h3>Hello World</h3>} />
        <Text variant="h4" color="danger" render={<h4>Hello World</h4>} />
        <Text variant="base" color="success">
          Hello World
        </Text>
        <Text
          variant="caption"
          color="primary"
          render={<span>Hello World</span>}
        />
      </div>
    </Container>
  );
}
