import { createFileRoute } from "@tanstack/react-router";
import NumberCounter from "../../testingComponents/numberCounter";
import Container from "../../shared/layout/Container";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import Button from "../../shared/ui/Button";
export const Route = createFileRoute("/number-counter-example/")({
  component: RouteComponent,
});

interface FormData {
  numberCounter: number;
}

function RouteComponent() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      numberCounter: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Controller
          control={control}
          name="numberCounter"
          render={({ field }) => (
            <NumberCounter onChange={field.onChange} value={field.value} />
          )}
        />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
