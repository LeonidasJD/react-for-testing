import { Input as InputBase } from "@base-ui/react/input";
import { cn } from "../../utils/cn";
import { forwardRef } from "react";
import Text from "./Text";
interface InputProps {
  label?: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      error,
      defaultValue,
      disabled = false,
      type = "text",
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="flex w-full flex-col">
        {label && (
          <label
            className={`text-sm leading-5 font-medium text-gray-900 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          >
            {label}
          </label>
        )}
        <InputBase
          {...rest}
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          className={cn(
            `mt-1 h-10 w-full rounded-md border border-gray-900 pl-3.5 text-base text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800 ${disabled ? "cursor-not-allowed border-gray-200" : ""}}`,
          )}
        />
        {error && (
          <Text variant="error" color="danger">
            {error}
          </Text>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
