import { Dialog } from "@base-ui/react";
import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

export const Modal = Dialog.Root;

type TriggerVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "outline";

type TriggerSize = "small" | "medium" | "large";

const triggerStyles: Record<TriggerVariant, string> = {
  primary:
    "rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors",
  secondary:
    "rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 transition-colors",
  danger:
    "rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition-colors",
  success:
    "rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors",
  outline:
    "rounded-md border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-50 transition-colors",
};

const triggerSizeStyles: Record<TriggerSize, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

interface ModalTriggerProps extends ComponentProps<typeof Dialog.Trigger> {
  variant?: TriggerVariant;
  size?: TriggerSize;
}

export const ModalTrigger = ({
  variant = "primary",
  className,
  children,
  size = "medium",
  ...props
}: ModalTriggerProps) => {
  return (
    <Dialog.Trigger
      className={cn(
        "cursor-pointer",
        triggerStyles[variant],
        triggerSizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </Dialog.Trigger>
  );
};

export const ModalBackdrop = ({
  className = "",
  ...props
}: ComponentProps<typeof Dialog.Backdrop>) => {
  return (
    <Dialog.Backdrop
      className={cn("fixed inset-0 bg-black/50", className)}
      {...props}
    />
  );
};

export const ModalContent = ({
  className = "",
  children,
  ...props
}: ComponentProps<typeof Dialog.Popup>) => {
  return (
    <Dialog.Portal>
      <ModalBackdrop>
        <Dialog.Popup
          className={cn(
            "fixed top-1/2 left-1/2 box-border w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-6 shadow-xl",
            className,
          )}
          {...props}
        >
          {children}
        </Dialog.Popup>
      </ModalBackdrop>
    </Dialog.Portal>
  );
};

export const ModalTitle = ({
  className = "",
  children,
  ...props
}: ComponentProps<typeof Dialog.Title>) => {
  return (
    <Dialog.Title className={cn("mb-4 text-gray-600", className)} {...props}>
      {children}
    </Dialog.Title>
  );
};

export const ModalClose = ({
  className = "",
  children = "Close",
  variant = "secondary",
  ...props
}: ComponentProps<typeof Dialog.Close> & { variant?: TriggerVariant }) => {
  return (
    <Dialog.Close
      className={cn("cursor-pointer", triggerStyles[variant], className)}
      {...props}
    >
      {children}
    </Dialog.Close>
  );
};

interface ModalActionProps extends ComponentProps<"button"> {
  variant?: TriggerVariant;
  formId?: string;
}

export const ModalAction = ({
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
  formId = "",
  ...props
}: ModalActionProps) => {
  return (
    <button
      form={formId}
      type={type}
      disabled={disabled}
      className={cn(
        "cursor-pointer",
        triggerStyles[variant],
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    />
  );
};

export const ModalFooter = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`mt-6 flex items-center justify-end gap-3 ${className}`}>
      {children}
    </div>
  );
};
