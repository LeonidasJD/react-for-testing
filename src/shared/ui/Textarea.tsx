import {
  texareaVariants,
  type TextareaVariants,
} from "../../variants/texareaVariants";

interface TextareaProps extends TextareaVariants {
  placeholder: string;
  className?: string;
  disabled?: boolean;
}

const Textarea = ({
  placeholder,
  variant,
  className,
  disabled,
  ...props
}: TextareaProps) => {
  return (
    <textarea
      className={texareaVariants({ variant, className, disabled })}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
