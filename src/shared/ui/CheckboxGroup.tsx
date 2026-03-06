import { CheckboxGroup } from "@base-ui/react/checkbox-group";
import { SingleCheckbox } from "./Checkbox";

interface CheckboxGroupProps {
  items: {
    label: string;
    value: string;
  }[];
  value?: string[];
  error?: string;
  onValueChange?: (value: string[]) => void;
}

const CheckboxGroupField = ({
  items,
  value,
  error,
  onValueChange,
}: CheckboxGroupProps) => {
  return (
    <CheckboxGroup onValueChange={onValueChange} value={value}>
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
