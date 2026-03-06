import * as React from "react";
import { Checkbox } from "@base-ui/react/checkbox";
import { IoIosCheckmark } from "react-icons/io";
import Text from "./Text";

interface CheckboxRootProps {
  children: React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
export const CheckboxRoot = ({
  children,
  value,
  checked,

  onChange,
}: CheckboxRootProps) => {
  return (
    <Checkbox.Root
      onCheckedChange={(newChecked) => onChange?.(newChecked)}
      value={value}
      checked={checked}
      className="flex size-5 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-checked:bg-gray-900 data-unchecked:border data-unchecked:border-gray-300"
    >
      {children}
    </Checkbox.Root>
  );
};

interface CheckboxIndicatorProps {
  children: React.ReactNode;
}
export const CheckboxIndicator = ({ children }: CheckboxIndicatorProps) => {
  return (
    <Checkbox.Indicator className="flex text-gray-50 data-unchecked:hidden">
      {children}
    </Checkbox.Indicator>
  );
};

interface SingleCheckboxProps {
  label: string;
  value?: string;
  error?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}
export const SingleCheckbox = ({
  label,
  value,
  error,
  checked,
  onChange,
}: SingleCheckboxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 text-base text-gray-900">
        <CheckboxRoot value={value ?? ""} checked={checked} onChange={onChange}>
          <CheckboxIndicator>
            <IoIosCheckmark className="size-6" />
          </CheckboxIndicator>
        </CheckboxRoot>
        {label}
      </label>
      {error && (
        <Text variant="error" color="danger">
          {error}
        </Text>
      )}
    </div>
  );
};
