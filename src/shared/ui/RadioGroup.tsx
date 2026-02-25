import { RadioGroup, RadioRoot, RadioIndicator } from "../../shared/ui/Radio";
import Text from "../../shared/ui/Text";

interface RadioGroupProps {
  items: {
    value: string;
    label: string;
  }[];
  mainLabel: string;
  id: string;
  onValueChange: (value: string) => void;
}

const RadioGroupField = ({
  items,
  mainLabel,
  id,
  onValueChange,
}: RadioGroupProps) => {
  return (
    <RadioGroup
      onValueChange={onValueChange}
      mainLabel={mainLabel}
      id={id}
      defaultValue={items[0].value}
      className="flex flex-col items-start gap-1 text-gray-900"
    >
      {items.map((item) => (
        <label className="flex items-center gap-2">
          <RadioRoot
            value={item.value}
            className="flex size-5 items-center justify-center rounded-full hover:cursor-pointer focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-checked:bg-gray-900 data-unchecked:border data-unchecked:border-gray-300"
          >
            <RadioIndicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-unchecked:hidden" />
          </RadioRoot>
          <Text variant="base" weight="medium" color="primary">
            {item.label}
          </Text>
        </label>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupField;
