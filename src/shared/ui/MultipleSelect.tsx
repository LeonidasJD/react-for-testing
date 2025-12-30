import * as React from "react";
import { Combobox } from "@base-ui/react/combobox";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}
interface MultipleSelectProps {
  label: string;
  options: Option[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onValueChange?: (value: string[]) => void;
}
const MultipleSelect = ({
  label,
  options,
  error,
  disabled = false,
  placeholder = "Select...",
  onValueChange,
}: MultipleSelectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <Combobox.Root multiple items={options} onValueChange={onValueChange}>
      <div className="flex max-w-md flex-col">
        <label className="mb-2 text-sm leading-5 font-medium text-gray-900">
          {label}
        </label>

        <Combobox.Chips
          className="flex w-64 flex-wrap items-center gap-0.5 rounded-md border border-gray-500 px-2 py-1 focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-blue-800 min-[500px]:w-88"
          ref={containerRef}
        >
          <Combobox.Value>
            {(value: Option[]) => (
              <React.Fragment>
                {value.map((option) => (
                  <Combobox.Chip
                    key={option.value}
                    className="flex cursor-default items-center gap-1 rounded-md bg-gray-100 px-1.5 py-[0.2rem] text-sm text-gray-900 outline-none focus-within:bg-blue-800 focus-within:text-gray-50 hover:bg-blue-100"
                  >
                    {option.label}
                    <Combobox.ChipRemove
                      className="rounded-md p-1 text-inherit hover:bg-gray-200"
                      aria-label="Remove"
                    >
                      <IoClose />
                    </Combobox.ChipRemove>
                  </Combobox.Chip>
                ))}
                <Combobox.Input
                  disabled={disabled}
                  placeholder={value.length > 0 ? "" : placeholder}
                  className={`h-8 min-w-12 flex-1 rounded-md bg-transparent pl-2 text-base text-gray-900 outline-none ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
                />
              </React.Fragment>
            )}
          </Combobox.Value>
        </Combobox.Chips>
        {error && (
          <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
        )}
      </div>

      <Combobox.Portal>
        <Combobox.Positioner
          className="z-50 outline-none"
          sideOffset={4}
          anchor={containerRef}
        >
          <Combobox.Popup className="max-h-60 w-full min-w-88 overflow-y-auto overscroll-contain rounded-md border border-gray-200 bg-white py-2 text-gray-900 shadow-lg">
            <Combobox.Empty className="px-4 py-2 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0">
              No options found.
            </Combobox.Empty>
            <Combobox.List>
              {(option: Option) => (
                <Combobox.Item
                  key={option.value}
                  className="relative flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-base text-gray-900 transition-colors outline-none hover:bg-gray-100 data-highlighted:bg-blue-50 data-highlighted:text-blue-900"
                  value={option}
                >
                  <Combobox.ItemIndicator className="absolute left-2">
                    <IoMdCheckmark className="size-3 text-blue-600" />
                  </Combobox.ItemIndicator>
                  <div className="ml-4">{option.label}</div>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
};

export default MultipleSelect;
