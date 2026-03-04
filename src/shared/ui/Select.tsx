import { Field } from "@base-ui/react/field";
import { Select } from "@base-ui/react/select";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import Text from "./Text";

interface Option {
  label: string;
  value: string;
}

interface FieldRootProps {
  children: React.ReactNode;
}
export const FieldRoot = ({ children }: FieldRootProps) => {
  return <Field.Root className="flex flex-col gap-1">{children}</Field.Root>;
};

interface FieldLabelProps {
  label: string;
}
export const FieldLabel = ({ label }: FieldLabelProps) => {
  return (
    <Field.Label
      className="cursor-default text-sm leading-5 font-medium text-gray-900"
      nativeLabel={false}
      render={<div />}
    >
      {label}
    </Field.Label>
  );
};

interface SelectRootProps {
  items: Option[];
  children: React.ReactNode;
  value?: string;
  onValueChange: (value: string) => void;
}
export const SelectRoot = ({
  children,
  items,
  value,
  onValueChange,
}: SelectRootProps) => {
  return (
    <Select.Root
      items={items}
      value={value}
      onValueChange={(value) => onValueChange(value as string)}
    >
      {children}
    </Select.Root>
  );
};

interface SelectTriggerProps {
  children: React.ReactNode;
  disabled?: boolean;
}
export const SelectTrigger = ({ children, disabled }: SelectTriggerProps) => {
  return (
    <Select.Trigger
      disabled={disabled}
      className="flex h-10 min-w-40 items-center justify-between gap-3 rounded-md border border-gray-200 bg-[canvas] pr-3 pl-3.5 text-base text-gray-900 select-none hover:cursor-pointer hover:bg-gray-100 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-50 data-popup-open:bg-gray-100"
    >
      {children}
    </Select.Trigger>
  );
};

interface SelectValueProps {
  placeholder: string;
}
export const SelectValue = ({ placeholder }: SelectValueProps) => {
  return (
    <Select.Value
      className="data-placeholder:opacity-60"
      placeholder={placeholder}
    />
  );
};
interface SelectIconProps {
  children: React.ReactNode;
}
export const SelectIcon = ({ children }: SelectIconProps) => {
  return <Select.Icon>{children}</Select.Icon>;
};

interface SelectPortalProps {
  children: React.ReactNode;
}
export const SelectPortal = ({ children }: SelectPortalProps) => {
  return <Select.Portal>{children}</Select.Portal>;
};

interface SelectPositionerProps {
  children: React.ReactNode;
}
export const SelectPositioner = ({ children }: SelectPositionerProps) => {
  return (
    <Select.Positioner className="z-10 outline-none select-none" sideOffset={8}>
      {children}
    </Select.Positioner>
  );
};

interface SelectPopupProps {
  children: React.ReactNode;
}
export const SelectPopup = ({ children }: SelectPopupProps) => {
  return (
    <Select.Popup className="group min-w-var(--anchor-width) origin-var(--transform-origin) data-[ending-style:opacity-0 rounded-md bg-[canvas] bg-clip-padding text-gray-900 shadow-lg shadow-gray-200 outline outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-starting-style:transition-none data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 dark:shadow-none dark:outline-gray-300">
      {children}
    </Select.Popup>
  );
};

export const SelectScrollUpArrow = () => {
  return (
    <Select.ScrollUpArrow className="top-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:-top-full" />
  );
};

interface SelectListProps {
  children: React.ReactNode;
}
export const SelectList = ({ children }: SelectListProps) => {
  return (
    <Select.List className="max-h-var(--available-height) relative scroll-py-6 overflow-y-auto py-1">
      {children}
    </Select.List>
  );
};

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  label: string;
}
export const SelectItem = ({ children, value, label }: SelectItemProps) => {
  return (
    <Select.Item
      key={label}
      value={value}
      className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 hover:cursor-pointer data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
    >
      {children}
    </Select.Item>
  );
};

interface SelectItemIndicatorProps {
  children: React.ReactNode;
}
export const SelectItemIndicator = ({ children }: SelectItemIndicatorProps) => {
  return (
    <Select.ItemIndicator className="col-start-1">
      {children}
    </Select.ItemIndicator>
  );
};

const SelectScrollDownArrow = () => {
  return (
    <Select.ScrollDownArrow className="bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:-bottom-full" />
  );
};

interface SelectItemTextProps {
  label: string;
}
export const SelectItemText = ({ label }: SelectItemTextProps) => {
  return (
    <Select.ItemText className="col-start-2 hover:cursor-pointer">
      {label}
    </Select.ItemText>
  );
};

interface SelectorProps {
  fieldLabel: string;
  items: Option[];
  placeholder: string;
  value?: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  errorMessage?: string;
}

export const Selector = ({
  fieldLabel,
  items,
  placeholder,
  value,
  disabled,
  errorMessage,
  onValueChange,
}: SelectorProps) => {
  return (
    <FieldRoot>
      <FieldLabel label={fieldLabel} />

      <SelectRoot value={value} items={items} onValueChange={onValueChange}>
        <SelectTrigger disabled={disabled}>
          <SelectValue placeholder={placeholder} />
          <SelectIcon>
            <MdOutlineKeyboardArrowDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {items.map((item) => (
                  <SelectItem value={item.value} label={item.label}>
                    <SelectItemIndicator>
                      <IoIosCheckmark className="size-5" />
                    </SelectItemIndicator>
                    <SelectItemText label={item.label} />
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
        <Text variant="error" color="danger">
          {errorMessage}
        </Text>
      </SelectRoot>
    </FieldRoot>
  );
};
