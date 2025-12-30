import { Autocomplete } from "@base-ui/react/autocomplete";
import { forwardRef } from "react";

interface AutocompleteInputProps {
  items: AutocompleteItem[];
  label?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

interface AutocompleteItem {
  value: string;
}

const AutocompleteInput = forwardRef<HTMLInputElement, AutocompleteInputProps>(
  (
    {
      items,
      label = "Autocomplete Input",
      placeholder = "Search",
      onValueChange,
      error,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <Autocomplete.Root
        items={items}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <label className="flex flex-col gap-1 font-medium text-gray-900">
          {label}
          <Autocomplete.Input
            ref={ref}
            {...rest}
            placeholder={placeholder}
            className={`m-0 box-border h-10 w-50 rounded-md border-2 bg-amber-50 pl-2 text-base transition-colors outline-none ${
              error
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 focus:border-blue-500"
            } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          />
        </label>
        {error && (
          <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
        )}
        <Autocomplete.Portal>
          <Autocomplete.Positioner className="outline-none">
            <Autocomplete.Popup className="box-border w-full rounded-md border border-gray-200 bg-white text-gray-900 shadow-lg">
              <Autocomplete.Empty className="box-border w-full min-w-50 p-4 text-[0.925rem] leading-4 text-gray-600 empty:hidden">
                No tags found.
              </Autocomplete.Empty>
              <Autocomplete.List className="box-border max-h-60 w-50 scroll-p-0.5 overflow-y-auto overscroll-contain p-2 outline-0 data-empty:p-0">
                {(tag: AutocompleteItem) => (
                  <Autocomplete.Item
                    key={tag.value}
                    value={tag}
                    className="relative box-border flex w-full cursor-pointer rounded-md px-2 py-2 text-base text-gray-900 outline-0 transition-colors hover:bg-gray-100 data-highlighted:bg-blue-50 data-highlighted:text-blue-900"
                  >
                    {tag.value}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    );
  },
);

export default AutocompleteInput;
