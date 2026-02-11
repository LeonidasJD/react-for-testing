import { Button as ButtonBase } from "@base-ui/react/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "../../variants/buttonVariants";

interface ButtonProps extends ButtonVariants {
  render?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  variant,
  size,
  disabled,
  render,
  children,
  className,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      className={buttonVariants({
        variant,
        size,
        disabled,
        className,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {render ?? children}
    </ButtonBase>
  );
};

export default Button;
