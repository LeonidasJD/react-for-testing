import { Select as SelectBase } from "@base-ui/react/select";
import { Field } from "@base-ui/react/field";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onValueChange: (value: string) => void;
}

const Select = ({ label, options, onValueChange }: SelectProps) => {
  return (
    <Field.Root className="flex w-full max-w-64 flex-col gap-1">
      <Field.Label
        className="cursor-default text-sm leading-5 font-medium text-gray-900"
        render={<div />}
      >
        {label}
      </Field.Label>
      <SelectBase.Root
        items={options}
        onValueChange={(value) => onValueChange(value as string)}
      >
        <SelectBase.Trigger className="flex h-10 min-w-40 cursor-pointer items-center justify-between gap-3 rounded-md border border-gray-200 bg-[canvas] pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-popup-open:bg-gray-100">
          <SelectBase.Value className="data-placeholder:opacity-60" />
          <SelectBase.Icon className="flex">
            <IoIosArrowDown />
          </SelectBase.Icon>
        </SelectBase.Trigger>
        <SelectBase.Portal>
          <SelectBase.Positioner
            className="z-10 outline-none select-none"
            sideOffset={8}
          >
            <SelectBase.Popup className="group min-w-(--anchor-width) origin-(--transform-origin) rounded-md bg-[canvas] bg-clip-padding text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-ending-style:transition-none data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-starting-style:transition-none dark:shadow-none dark:outline-gray-300">
              <SelectBase.ScrollUpArrow className="top-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:-top-full" />
              <SelectBase.List className="relative max-h-(--available-height) scroll-py-6 overflow-y-auto py-1">
                {options?.map(({ label, value }) => (
                  <SelectBase.Item
                    key={label}
                    value={value}
                    className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-highlighted:relative data-highlighted:z-0 data-highlighted:text-gray-50 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-gray-900 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
                  >
                    <SelectBase.ItemIndicator className="col-start-1">
                      <FaCheck className="size-3" />
                    </SelectBase.ItemIndicator>
                    <SelectBase.ItemText className="col-start-2 cursor-pointer">
                      {label}
                    </SelectBase.ItemText>
                  </SelectBase.Item>
                ))}
              </SelectBase.List>
              <SelectBase.ScrollDownArrow className="bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:-bottom-full" />
            </SelectBase.Popup>
          </SelectBase.Positioner>
        </SelectBase.Portal>
      </SelectBase.Root>
    </Field.Root>
  );
};

export default Select;
