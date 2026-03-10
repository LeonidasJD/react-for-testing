import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import Button from "../../../shared/ui/Button";
import Container from "../../../shared/layout/Container";
import { Selector } from "../../../shared/ui/Select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  apple: z.string().min(1),
});

export const Route = createFileRoute("/_protected/select-example/")({
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      apple: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <Container>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="apple"
          render={({ field }) => (
            <Selector
              value={field.value}
              errorMessage={errors.apple?.message}
              onValueChange={(value) => field.onChange(value)}
              fieldLabel="Apples"
              items={apples}
              placeholder="Select an apple"
            />
          )}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
