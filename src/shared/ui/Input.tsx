import { Input as InputBase } from "@base-ui/react/input";
import { cn } from "../../utils/cn";
import { forwardRef } from "react";
interface InputProps {
  label: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
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
    { label, placeholder, error, disabled = false, type = "text", ...rest },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          className={`text-sm leading-5 font-medium text-gray-900 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {label}
        </label>
        <InputBase
          {...rest}
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            `mt-2 h-10 w-full max-w-64 rounded-md border border-gray-900 pl-3.5 text-base text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800 ${disabled ? "cursor-not-allowed border-gray-200" : ""}}`,
          )}
        />
        {error && (
          <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
