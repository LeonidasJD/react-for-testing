import { Radio } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupBase } from "@base-ui/react/radio-group";
import Text from "./Text";

interface RadioGroupProps {
  children: React.ReactNode;
  className?: string;
  mainLabel: string;
  id: string;
  defaultValue: string;
  onValueChange: (value: string) => void;
}

export const RadioGroup = ({
  children,
  className,
  mainLabel,
  id,
  defaultValue,
  onValueChange,
}: RadioGroupProps) => {
  return (
    <RadioGroupBase
      defaultValue={defaultValue}
      aria-labelledby={id}
      className={className}
      onValueChange={onValueChange}
    >
      <div id={id}>
        <Text variant="base" weight="medium" color="primary">
          {mainLabel}
        </Text>
      </div>
      {children}
    </RadioGroupBase>
  );
};

interface RadioRootProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}
export const RadioRoot = ({ value, children, className }: RadioRootProps) => {
  return (
    <Radio.Root value={value} className={className}>
      {children}
    </Radio.Root>
  );
};

interface RadioIndicatorProps {
  className?: string;
}
export const RadioIndicator = ({ className }: RadioIndicatorProps) => {
  return <Radio.Indicator className={className} />;
};
