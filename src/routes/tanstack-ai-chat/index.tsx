import { createFileRoute } from "@tanstack/react-router";
import { Chat } from "../../shared/tanstackChat/chat";
import Text from "../../shared/ui/Text";

export const Route = createFileRoute("/tanstack-ai-chat/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <Text variant="h1">AI Chat Example (Powered by Claude)</Text>
      <Chat />
    </div>
  );
}
