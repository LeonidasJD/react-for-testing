import { createFileRoute } from "@tanstack/react-router";
import Container from "../../../shared/layout/Container";
import { CustomField } from "../../../shared/ui/Field";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../shared/ui/Button";
export const Route = createFileRoute("/_protected/field-example/")({
  component: RouteComponent,
});

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

function RouteComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <Container>
      <div>
        <p className="text-lg font-bold text-gray-800">Field Example</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomField
            {...register("name")}
            label="Name"
            placeholder="Enter your name"
            error={errors.name?.message}
          />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
