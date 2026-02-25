import { createFileRoute } from "@tanstack/react-router";
import Container from "../../shared/layout/Container";
import { RadioGroup, RadioRoot, RadioIndicator } from "../../shared/ui/Radio";
import Text from "../../shared/ui/Text";
import RadioGroupField from "../../shared/ui/RadioGroup";
import { useForm } from "react-hook-form";
import Button from "../../shared/ui/Button";
import { Controller } from "react-hook-form";
export const Route = createFileRoute("/radio-example/")({
  component: RouteComponent,
});

const appleTypes = [
  { value: "gala", label: "Gala" },
  { value: "honeycrisp", label: "Honeycrisp" },
  { value: "jonathan", label: "Jonathan" },
];

function RouteComponent() {
  const { control: control1, handleSubmit: handleSubmit1 } = useForm();

  const { control: control2, handleSubmit: handleSubmit2 } = useForm();

  const onSubmitCustomRadioGroup = (data: any) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  const onSubmitAutomatedRadioGroup = (data: any) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <div className="flex flex-row gap-10">
        {/* Custom Radio Group */}
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit1(onSubmitCustomRadioGroup)}
        >
          <div className="flex flex-col gap-4">
            <Text variant="h4" weight="medium" color="primary">
              Custom Radio Group
            </Text>

            <Controller
              control={control1}
              name="appleType"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  mainLabel="Apple Types"
                  id="apple-types"
                  defaultValue={appleTypes[0].value}
                  className="flex flex-col items-start gap-1 text-gray-900"
                >
                  {appleTypes.map((apple) => (
                    <label className="flex items-center gap-2">
                      <RadioRoot
                        value={apple.value}
                        className="flex size-5 items-center justify-center rounded-full hover:cursor-pointer focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-checked:bg-gray-900 data-unchecked:border data-unchecked:border-gray-300"
                      >
                        <RadioIndicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-unchecked:hidden" />
                      </RadioRoot>
                      <Text variant="base" weight="medium" color="primary">
                        {apple.label}
                      </Text>
                    </label>
                  ))}
                </RadioGroup>
              )}
            />
          </div>
          <Button type="submit" variant="primary">
            Submit Custom Radio
          </Button>
        </form>

        {/* Automated Radio Group */}

        <div className="flex flex-col gap-4">
          <Text variant="h4" weight="medium" color="primary">
            Automated Radio Group
          </Text>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit2(onSubmitAutomatedRadioGroup)}
          >
            <Controller
              control={control2}
              name="appleTypeAutomated"
              render={({ field }) => (
                <RadioGroupField
                  mainLabel="Apple Types"
                  id="apple-types"
                  items={appleTypes}
                  onValueChange={field.onChange}
                />
              )}
            />
            <Button type="submit" variant="primary">
              Submit Automated Radio
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
