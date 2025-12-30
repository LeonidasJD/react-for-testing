import { Checkbox } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupBase } from "@base-ui/react/checkbox-group";
import { IoCheckmarkSharp } from "react-icons/io5";

interface CheckboxGroupProps {
  onValueChange: (value: string[]) => void;
  mainLabel: string;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
}

const CheckboxGroup = ({
  mainLabel,
  options,
  error,
  onValueChange,
}: CheckboxGroupProps) => {
  return (
    <CheckboxGroupBase
      defaultValue={[options[0]?.value]}
      onValueChange={onValueChange}
      className="flex flex-col items-start gap-1 text-gray-900"
    >
      <div className="font-medium">{mainLabel}</div>

      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-2"
        >
          <Checkbox.Root
            name={option.value}
            value={option.value}
            className="flex size-5 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-checked:bg-gray-900 data-unchecked:border data-unchecked:border-gray-300"
          >
            <Checkbox.Indicator className="flex text-gray-50 data-unchecked:hidden">
              <IoCheckmarkSharp className="size-3" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          {option.label}
        </label>
      ))}
      {error && (
        <p className="mt-2 text-xs font-medium text-red-500">{error}</p>
      )}
    </CheckboxGroupBase>
  );
};

export default CheckboxGroup;
