import { Combobox } from "@base-ui/react/combobox";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import React from "react";
import Text from "./Text";

interface Item {
  value: string;
  label: string;
}

interface ComboboxRootProps {
  children: React.ReactNode;
  items: Item[];
}
export const ComboboxRoot = ({ children, items }: ComboboxRootProps) => {
  return (
    <Combobox.Root items={items} multiple>
      {children}
    </Combobox.Root>
  );
};

interface ComboboxChipsProps {
  children: React.ReactNode;
}
export const ComboboxChips = ({ children }: ComboboxChipsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Combobox.Chips
      className="flex w-64 flex-wrap items-center gap-0.5 rounded-md border border-gray-200 px-1.5 py-1 focus-within:outline focus-within:-outline-offset-1 focus-within:outline-blue-800 min-[500px]:w-88"
      ref={containerRef}
    >
      {children}
    </Combobox.Chips>
  );
};

interface ComboboxValueProps {
  children: React.ReactNode | ((value: Item[]) => React.ReactNode);
}
export const ComboboxValue = ({ children }: ComboboxValueProps) => {
  return <Combobox.Value>{children}</Combobox.Value>;
};

interface ComboboxChipProps {
  label: string;
}
export const ComboboxChip = ({ label }: ComboboxChipProps) => {
  return (
    <Combobox.Chip
      className="flex cursor-default items-center gap-1 rounded-md bg-gray-100 px-1.5 py-[0.2rem] text-sm text-gray-900 outline-none focus-within:bg-blue-800 focus-within:text-gray-50 [@media(hover:hover)]:[&[data-highlighted]]:bg-blue-800 [@media(hover:hover)]:[&[data-highlighted]]:text-gray-50"
      aria-label={label}
    >
      {label}
      <ComboboxChipRemove />
    </Combobox.Chip>
  );
};

export const ComboboxChipRemove = () => {
  return (
    <Combobox.ChipRemove
      className="rounded-md p-1 text-inherit hover:bg-gray-200"
      aria-label="Remove"
    >
      <IoClose />
    </Combobox.ChipRemove>
  );
};
interface ComboboxInputProps {
  placeholder: string;
}
export const ComboboxInput = ({ placeholder }: ComboboxInputProps) => {
  return (
    <Combobox.Input
      placeholder={placeholder}
      className="h-8 min-w-12 flex-1 rounded-md border-0 bg-transparent pl-2 text-base text-gray-900 outline-none"
    />
  );
};

interface ComboboxPortalProps {
  children: React.ReactNode;
}
export const ComboboxPortal = ({ children }: ComboboxPortalProps) => {
  return <Combobox.Portal>{children}</Combobox.Portal>;
};

interface ComboboxPositionerProps {
  children: React.ReactNode;
}
export const ComboboxPositioner = ({ children }: ComboboxPositionerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Combobox.Positioner
      className="z-50 outline-none"
      sideOffset={4}
      anchor={containerRef}
    >
      {children}
    </Combobox.Positioner>
  );
};

interface ComboboxPopupProps {
  children: React.ReactNode;
}
export const ComboboxPopup = ({ children }: ComboboxPopupProps) => {
  return (
    <Combobox.Popup className="max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-md bg-[canvas] py-2 text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
      {children}
    </Combobox.Popup>
  );
};

interface ComboboxEmptyProps {
  noOptionsMessage: string;
}
export const ComboboxEmpty = ({ noOptionsMessage }: ComboboxEmptyProps) => {
  return (
    <Combobox.Empty className="px-4 py-2 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0">
      {noOptionsMessage}
    </Combobox.Empty>
  );
};

interface ComboboxItemProps {
  children: React.ReactNode;
  value: Item;
}
export const ComboboxItem = ({ children, value }: ComboboxItemProps) => {
  return (
    <Combobox.Item
      className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none [@media(hover:hover)]:[&[data-highlighted]]:relative [@media(hover:hover)]:[&[data-highlighted]]:z-0 [@media(hover:hover)]:[&[data-highlighted]]:text-gray-50 [@media(hover:hover)]:[&[data-highlighted]]:before:absolute [@media(hover:hover)]:[&[data-highlighted]]:before:inset-x-2 [@media(hover:hover)]:[&[data-highlighted]]:before:inset-y-0 [@media(hover:hover)]:[&[data-highlighted]]:before:z-[-1] [@media(hover:hover)]:[&[data-highlighted]]:before:rounded-sm [@media(hover:hover)]:[&[data-highlighted]]:before:bg-gray-900"
      value={value}
    >
      {children}
    </Combobox.Item>
  );
};

export const ComboboxItemIndicator = () => {
  return (
    <Combobox.ItemIndicator className="col-start-1">
      <IoIosCheckmark className="size-3" />
    </Combobox.ItemIndicator>
  );
};

export const ComboboxList = () => {
  return (
    <Combobox.List>
      {(item: Item) => (
        <ComboboxItem key={item.value} value={item}>
          <ComboboxItemIndicator />
          <div className="col-start-2">{item.label}</div>
        </ComboboxItem>
      )}
    </Combobox.List>
  );
};

interface MultipleSelectProps {
  items: Item[];
  label: string;
  placeholder: string;
  noOptionsMessage: string;
  errorMessage?: string;
}
export const MultipleSelect = ({
  items,
  label,
  placeholder,
  noOptionsMessage,
  errorMessage,
}: MultipleSelectProps) => {
  return (
    <ComboboxRoot items={items}>
      <div className="flex max-w-md flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <ComboboxChips>
          <ComboboxValue>
            {(value: Item[]) => (
              <React.Fragment>
                {value.map((item) => (
                  <ComboboxChip key={item.value} label={item.label} />
                ))}
                <ComboboxInput
                  placeholder={value.length > 0 ? "" : placeholder}
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
      </div>
      <ComboboxPortal>
        <ComboboxPositioner>
          <ComboboxPopup>
            <ComboboxEmpty noOptionsMessage={noOptionsMessage} />
            <ComboboxList />
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
      <Text variant="error" color="danger">
        {errorMessage}
      </Text>
    </ComboboxRoot>
  );
};
