import { useRender } from "@base-ui/react/use-render";
import { textVariants, type TextVariants } from "../../variants/textVariants";

interface TextProps extends TextVariants {
  children?: React.ReactNode;
  className?: string;
  render?: React.ReactElement;
}

const Text = ({
  children,
  variant,
  weight,
  color,
  align,
  className,
  render,
}: TextProps) => {
  const combinedClassName = textVariants({
    variant,
    weight,
    color,
    align,
    className,
  });

  const renderElement = useRender({
    render,
    defaultTagName: "p",
    props: {
      className: combinedClassName,
      children,
    },
  });

  return renderElement;
};

export default Text;
