import { Switch as SwitchBase } from "@base-ui/react/switch";
import {
  switchVariants,
  type SwitchVariants,
} from "../../variants/switchVariants";

interface SwitchProps extends SwitchVariants {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({
  label,
  checked,
  variant = "primary",
  position = "top",
  onChange,
}: SwitchProps) => {
  const variants = switchVariants({ variant, position });

  return (
    <div className={variants.container()}>
      <label className={variants.label()}> {label}</label>
      <SwitchBase.Root
        checked={checked}
        onCheckedChange={onChange}
        className={variants.root()}
      >
        <SwitchBase.Thumb className={variants.thumb()} />
      </SwitchBase.Root>
    </div>
  );
};

export default Switch;
