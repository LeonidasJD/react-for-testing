import { createFileRoute } from "@tanstack/react-router";
import Select from "../../shared/ui/Select";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import Button from "../../shared/ui/Button";

export const Route = createFileRoute("/select-example/")({
  component: RouteComponent,
});

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

function RouteComponent() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="apple"
          render={({ field }) => (
            <Select
              label="Select an apple"
              options={apples}
              onValueChange={(value) => {
                field.onChange(value);
              }}
            />
          )}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
