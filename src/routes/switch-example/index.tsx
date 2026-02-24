import { createFileRoute } from "@tanstack/react-router";
import Container from "../../shared/layout/Container";
import Switch from "../../shared/ui/Switch";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import Button from "../../shared/ui/Button";
export const Route = createFileRoute("/switch-example/")({
  component: RouteComponent,
});

interface FormData {
  notificationsTop: boolean;
  notificationsRight: boolean;
}

function RouteComponent() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      notificationsTop: false,
      notificationsRight: false,
    },
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <Container>
      <form
        className="flex flex-col items-start gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="notificationsTop"
          defaultValue={false}
          render={({ field }) => (
            <Switch
              label="Notifications top"
              position="top"
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="notificationsRight"
          defaultValue={false}
          render={({ field }) => (
            <Switch
              variant="secondary"
              label="Notifications right"
              position="right"
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}
