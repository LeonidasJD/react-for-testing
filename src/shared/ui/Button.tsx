import { Button as ButtonBase } from "@base-ui/react/button";
import { cn } from "../../utils/cn";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  render?: React.ReactNode;
}

type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "outline";
type ButtonSize = "small" | "medium" | "large";

const buttonStyles: Record<ButtonVariant, string> = {
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

const buttonSizeStyles: Record<ButtonSize, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  disabled = false,
  render,
}: ButtonProps) => {
  return (
    <ButtonBase
      className={cn(
        "cursor-pointer",
        buttonStyles[variant],
        buttonSizeStyles[size],
        disabled && "cursor-not-allowed opacity-50",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {render ? render : children}
    </ButtonBase>
  );
};

export default Button;
