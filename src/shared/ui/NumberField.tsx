import { NumberField } from "@base-ui/react/number-field";

interface NumberFieldRootProps {
  id: string;
  value?: number;
  children: React.ReactNode;
  className?: string;
  onChange: (value: number) => void;
}

export const NumberFieldRoot = ({
  id,
  value,
  children,
  className,
  onChange,
  ...props
}: NumberFieldRootProps) => {
  return (
    <NumberField.Root
      min={0}
      {...props}
      id={id}
      value={value}
      onValueChange={(value) => onChange(Number(value))}
      className={className}
    >
      {children}
    </NumberField.Root>
  );
};

interface NumberFieldScrubAreaProps {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}
export const NumberFieldScrubArea = ({
  id,
  children,
  label,
  className,
  ...props
}: NumberFieldScrubAreaProps) => {
  return (
    <NumberField.ScrubArea {...props} className={className}>
      <label {...props} htmlFor={id} className="text-gray-900">
        {label}
      </label>
      {children}
    </NumberField.ScrubArea>
  );
};

interface NumberFieldScrubAreaCursorProps {
  children: React.ReactNode;
  className?: string;
}
export const NumberFieldScrubAreaCursor = ({
  children,
  className,
  ...props
}: NumberFieldScrubAreaCursorProps) => {
  return (
    <NumberField.ScrubAreaCursor {...props} className={className}>
      {children}
    </NumberField.ScrubAreaCursor>
  );
};

interface NumberFieldGroupProps {
  children: React.ReactNode;
  className?: string;
}
export const NumberFieldGroup = ({
  children,
  className,
  ...props
}: NumberFieldGroupProps) => {
  return (
    <NumberField.Group {...props} className={className}>
      {children}
    </NumberField.Group>
  );
};

interface NumberFieldDecrementProps {
  children: React.ReactNode;
  className?: string;
}
export const NumberFieldDecrement = ({
  children,
  className,
  ...props
}: NumberFieldDecrementProps) => {
  return (
    <NumberField.Decrement {...props} className={className}>
      {children}
    </NumberField.Decrement>
  );
};

interface NumberFieldInputProps {
  className?: string;
}
export const NumberFieldInput = ({
  className,
  ...props
}: NumberFieldInputProps) => {
  return <NumberField.Input {...props} className={className} />;
};

interface NumberFieldIncrementProps {
  children: React.ReactNode;
  className?: string;
}
export const NumberFieldIncrement = ({
  children,
  className,
  ...props
}: NumberFieldIncrementProps) => {
  return (
    <NumberField.Increment {...props} className={className}>
      {children}
    </NumberField.Increment>
  );
};
