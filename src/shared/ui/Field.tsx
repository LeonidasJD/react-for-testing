import { Field } from "@base-ui/react/field";
import { forwardRef } from "react";
import { Input } from "@base-ui/react/input";

interface FieldRootProps {
  children: React.ReactNode;
}
export const FieldRoot = ({ children }: FieldRootProps) => {
  return (
    <Field.Root className="flex w-full max-w-64 flex-col items-start gap-1">
      {children}
    </Field.Root>
  );
};

interface FieldLabelProps {
  label: string;
}
export const FieldLabel = ({ label }: FieldLabelProps) => {
  return (
    <Field.Label className="text-sm leading-5 font-medium text-gray-900">
      {label}
    </Field.Label>
  );
};

interface FieldInputProps extends Input.Props {}

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (props, ref) => {
    return (
      <Field.Control
        ref={ref}
        {...props}
        className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:-outline-offset-1 focus:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  },
);

interface FieldErrorProps {
  error: string;
}
export const FieldError = ({ error }: FieldErrorProps) => {
  return (
    <Field.Error match className="text-sm text-red-800">
      {error}
    </Field.Error>
  );
};

interface FieldDescriptionProps {
  description: string;
}
export const FieldDescription = ({ description }: FieldDescriptionProps) => {
  return (
    <Field.Description className="text-sm text-gray-600">
      {description}
    </Field.Description>
  );
};

interface CustomFieldProps extends Input.Props {
  label: string;
  error?: string;
  description?: string;
  placeholder?: string;
}

export const CustomField = forwardRef<HTMLInputElement, CustomFieldProps>(
  ({ label, error, description, placeholder, ...props }, ref) => {
    return (
      <FieldRoot>
        <FieldLabel label={label} />

        <FieldInput
          type="text"
          ref={ref}
          placeholder={placeholder}
          {...props}
        />

        {error && <FieldError error={error} />}
        {description && <FieldDescription description={description} />}
      </FieldRoot>
    );
  },
);
