import { createFileRoute } from "@tanstack/react-router";
import Container from "../../shared/layout/Container";
import Text from "../../shared/ui/Text";
import { CustomField } from "../../shared/ui/Field";
import Button from "../../shared/ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    localStorage.setItem("isAuthenticated", "true");
    navigate({ to: "/accordion-example" });
  };
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div>
          <Text variant="h1">Login</Text>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <CustomField
                  {...field}
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  error={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <CustomField
                  {...field}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  error={errors.password?.message}
                />
              )}
            />

            <Button type="submit" variant="primary">
              Login
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
