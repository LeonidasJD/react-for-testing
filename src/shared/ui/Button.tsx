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
}

const Button = ({
  variant,
  size,
  disabled,
  render,
  children,
  className,
  onClick,
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
      {...props}
    >
      {render ?? children}
    </ButtonBase>
  );
};

export default Button;
