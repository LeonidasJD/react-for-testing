import { NumberField } from "@base-ui/react";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BsArrows } from "react-icons/bs";
import Text from "../shared/ui/Text";

interface NumberCounterRootProps {
  children: React.ReactNode;
  disabled?: boolean;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}
export const NumberCounterRoot = ({
  children,
  disabled,
  min,
  max,
  step,
  value,
  onValueChange,
}: NumberCounterRootProps) => {
  return (
    <NumberField.Root
      onValueChange={(value) => onValueChange?.(Number(value))}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      id="number-counter"
      className="flex flex-col items-start gap-1 data-disabled:opacity-50"
    >
      {children}
    </NumberField.Root>
  );
};

interface NumberCounterScrubAreaProps {
  children: React.ReactNode;
  label?: string;
}
export const NumberCounterScrubArea = ({
  children,
  label,
}: NumberCounterScrubAreaProps) => {
  return (
    <NumberField.ScrubArea className="cursor-ew-resize">
      <label className="cursor-ew-resize text-sm font-medium text-gray-900">
        {label}
      </label>
      {children}
    </NumberField.ScrubArea>
  );
};

export const NumberCounterScrubCursor = () => {
  return (
    <NumberField.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
      <BsArrows />
    </NumberField.ScrubAreaCursor>
  );
};

interface NumberCounterGroupProps {
  children: React.ReactNode;
}
export const NumberCounterGroup = ({ children }: NumberCounterGroupProps) => {
  return <NumberField.Group className="flex">{children}</NumberField.Group>;
};

export const NumberCounterDecrement = () => {
  return (
    <NumberField.Decrement className="flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100">
      <FaMinus />
    </NumberField.Decrement>
  );
};

export const NumberCounterIncrement = () => {
  return (
    <NumberField.Increment className="flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100">
      <FaPlus />
    </NumberField.Increment>
  );
};

export const NumberCounterInput = () => {
  return (
    <NumberField.Input className="h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-1 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800" />
  );
};

interface NumberCounterProps {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
  error?: string;
  value?: number;
  onValueChange?: (value: number) => void;
}
export const NumberCounter = ({
  label,
  min,
  max,
  step,
  disabled,
  error,
  value,
  onValueChange,
}: NumberCounterProps) => {
  return (
    <NumberCounterRoot
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      onValueChange={onValueChange}
    >
      <NumberCounterScrubArea label={label}>
        <NumberCounterScrubCursor />
      </NumberCounterScrubArea>

      <NumberCounterGroup>
        <NumberCounterDecrement />
        <NumberCounterInput />
        <NumberCounterIncrement />
      </NumberCounterGroup>
      {error && (
        <Text variant="error" weight="medium" color="danger">
          {error}
        </Text>
      )}
    </NumberCounterRoot>
  );
};
