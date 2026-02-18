import { createFileRoute } from "@tanstack/react-router";
import { Chat } from "../../shared/tanstackChat/chat";
import Text from "../../shared/ui/Text";
import Container from "../../shared/layout/Container";
export const Route = createFileRoute("/tanstack-ai-chat/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="flex w-full flex-col items-center gap-4">
        <Text variant="h1">AI Chat Example (Powered by Claude)</Text>
        <Text variant="h4">
          Personal Programming Assistant with 10+ years of experience in
          frontend development
        </Text>
        <Chat />
      </div>
    </Container>
  );
}
