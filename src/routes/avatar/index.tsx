import { createFileRoute } from "@tanstack/react-router";
import AvatarImage from "../../shared/ui/Avatar";

export const Route = createFileRoute("/avatar/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <p className="text-lg font-bold text-gray-800">Avatar</p>
      <AvatarImage src="https://github.com/shadcn.png" fallback="CN" />
    </div>
  );
}
