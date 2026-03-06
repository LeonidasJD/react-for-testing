import { createFileRoute } from "@tanstack/react-router";
import { SingleCheckbox } from "../../shared/ui/Checkbox";
import Container from "../../shared/layout/Container";
import Text from "../../shared/ui/Text";
import CheckboxGroupField from "../../shared/ui/CheckboxGroup";
import { useForm } from "react-hook-form";
import Button from "../../shared/ui/Button";
import { Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export const Route = createFileRoute("/checkbox-example/")({
  component: RouteComponent,
});

const schema = z.object({
  rememberMe: z
    .boolean()
    .optional()
    .refine((value) => value === true, {
      message: "Remember me is required",
    }),
});
const schema2 = z.object({
  favoriteFruits: z.array(z.string()).optional(),
});

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Strawberries", value: "strawberries" },
];

function RouteComponent() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: zodResolver(schema2),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  const onSubmit2 = (data: z.infer<typeof schema2>) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <Container>
      <div className="flex flex-row gap-30">
        <div className="flex flex-col gap-4">
          <Text variant="h4" color="primary">
            Single Checkbox Example
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="rememberMe"
              defaultValue={true}
              render={({ field }) => (
                <SingleCheckbox
                  checked={field.value}
                  label="Remember me"
                  onChange={field.onChange}
                  error={errors.rememberMe?.message}
                />
              )}
            />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        </div>
        <div>
          <Text variant="h4" color="primary">
            Checkbox Group Example
          </Text>

          <form onSubmit={handleSubmit2(onSubmit2)}>
            <Controller
              control={control2}
              name="favoriteFruits"
              defaultValue={["apple", "banana"]}
              render={({ field }) => (
                <CheckboxGroupField
                  error={errors2.favoriteFruits?.message}
                  items={items}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              )}
            />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
