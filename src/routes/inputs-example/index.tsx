import { createFileRoute } from "@tanstack/react-router";
import AutocompleteInput from "../../shared/ui/AutocompleteInput";
import Input from "../../shared/ui/Input";
import MultipleSelect from "../../shared/ui/MultipleSelect";
export const Route = createFileRoute("/inputs-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  const autocompleteItems = [
    { id: "t1", value: "feature" },
    { id: "t2", value: "fix" },
    { id: "t3", value: "bug" },
    { id: "t4", value: "docs" },
    { id: "t5", value: "internal" },
    { id: "t6", value: "mobile" },
  ];

  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "strawberries", label: "Strawberries" },
  ];
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-4">
      <div>
        <p className="text-lg font-bold text-gray-800">Autocomplete input</p>
        <AutocompleteInput items={autocompleteItems} />
      </div>

      <div>
        <p className="text-lg font-bold text-gray-800">Input</p>
        <Input label="Name" placeholder="Enter your name" />
      </div>

      <div>
        <p className="text-lg font-bold text-gray-800">Multiple Select</p>

        <MultipleSelect
          label="Select your favorite fruits"
          options={fruits}
          placeholder="Select your favorite fruits"
          onValueChange={(value) => {
            console.log(value, "value");
          }}
        />
      </div>
    </div>
  );
}
