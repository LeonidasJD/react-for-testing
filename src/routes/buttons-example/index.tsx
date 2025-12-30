import { createFileRoute } from "@tanstack/react-router";

import Button from "../../shared/ui/Button";

export const Route = createFileRoute("/buttons-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-gray-800">Primary</p>
        <Button
          variant="primary"
          size="medium"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Click me
        </Button>
        <p className="text-lg font-bold text-gray-800">Secondary</p>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Click me
        </Button>

        <p className="text-lg font-bold text-gray-800">Danger</p>
        <Button
          variant="danger"
          size="medium"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Click me
        </Button>
      </div>
    </div>
  );
}
