import { createFileRoute } from "@tanstack/react-router";

import Input from "../../shared/ui/Input";
import { MultipleSelect } from "../../shared/ui/MultipleSelect";
import Container from "../../shared/layout/Container";
import { Controller, useForm } from "react-hook-form";
import Button from "../../shared/ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClassicAutocomplete } from "../../shared/ui/AutocompleteInput";

export const Route = createFileRoute("/inputs-example/")({
  component: RouteComponent,
});

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  feature: z.string().min(1, { message: "Feature is required" }),
  favoriteFruits: z
    .array(z.string())
    .min(1, { message: "Favorite fruits is required" }),
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

  const langs = [
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "py", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "cs", label: "C#" },
    { value: "php", label: "PHP" },
    { value: "ruby", label: "Ruby" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "swift", label: "Swift" },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      feature: "",
      favoriteFruits: [],
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <Container>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-4"
          action=""
        >
          <div>
            <p className="text-lg font-bold text-gray-800">
              Autocomplete input
            </p>
            <Controller
              control={control}
              name="feature"
              render={({ field }) => (
                <ClassicAutocomplete
                  value={field.value}
                  onValueChange={field.onChange}
                  label="Select a tag"
                  placeholder="Search for a tag"
                  noTagsMessage="No tags found"
                  tags={autocompleteItems}
                  errorMessage={errors.feature?.message}
                />
              )}
            />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Input</p>
            <Input
              {...register("name")}
              label="Name"
              placeholder="Enter your name"
              error={errors.name?.message}
            />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Multiple Select</p>

            <MultipleSelect
              items={langs}
              label="Select a language"
              placeholder="Select a language"
              noOptionsMessage="No languages found"
            />
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
