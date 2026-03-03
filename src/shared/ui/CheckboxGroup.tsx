import { CheckboxGroup } from "@base-ui/react/checkbox-group";
import { SingleCheckbox } from "./Checkbox";

interface CheckboxGroupProps {
  items: {
    label: string;
    value: string;
  }[];
  value?: string[];
  error?: string;
  defaultValues?: string[];
  onValueChange?: (value: string[]) => void;
}

const CheckboxGroupField = ({
  items,
  value,
  error,
  defaultValues,
  onValueChange,
}: CheckboxGroupProps) => {
  const isControlled = value !== undefined;
  return (
    <CheckboxGroup
      onValueChange={onValueChange}
      {...(isControlled ? { value } : { defaultValue: defaultValues })}
    >
      {items.map((item) => (
        <SingleCheckbox
          error={error}
          key={item.value}
          label={item.label}
          value={item.value}
        />
      ))}
    </CheckboxGroup>
  );
};

export default CheckboxGroupField;
