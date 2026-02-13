import { createFileRoute } from "@tanstack/react-router";
import { Chat } from "../../shared/tanstackChat/chat";
import Text from "../../shared/ui/Text";

export const Route = createFileRoute("/tanstack-ai-chat/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-10 mr-10 ml-10 flex flex-col items-center justify-center gap-4">
      <Text variant="h1">AI Chat Example (Powered by Claude)</Text>
      <Text variant="h4">
        Personal Programming Assistant with 10+ years of experience in frontend
        development
      </Text>
      <Chat />
    </div>
  );
}
