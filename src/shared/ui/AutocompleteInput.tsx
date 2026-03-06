import { Autocomplete } from "@base-ui/react/autocomplete";
import Text from "./Text";
interface Tag {
  id: string;
  value: string;
}

interface AutocompleteRootProps {
  children: React.ReactNode;
  tags: Tag[];
  label: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  value: string;
}
export const AutocompleteRoot = ({
  children,
  tags,
  label,
  placeholder,
  onValueChange,
  value,
}: AutocompleteRootProps) => {
  return (
    <Autocomplete.Root items={tags} onValueChange={onValueChange} value={value}>
      <label className="flex flex-col gap-1 text-sm leading-5 font-medium text-gray-900">
        {label}
        <Autocomplete.Input
          placeholder={placeholder}
          className="h-10 w-[16rem] rounded-md border border-gray-200 bg-[canvas] pl-3.5 text-base font-normal text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800 md:w-[20rem]"
        />
      </label>
      {children}
    </Autocomplete.Root>
  );
};

interface AutocompletePortalProps {
  children: React.ReactNode;
}
export const AutocompletePortal = ({ children }: AutocompletePortalProps) => {
  return <Autocomplete.Portal>{children}</Autocomplete.Portal>;
};

interface AutocompletePositionerProps {
  children: React.ReactNode;
}
export const AutocompletePositioner = ({
  children,
}: AutocompletePositionerProps) => {
  return (
    <Autocomplete.Positioner className="outline-none" sideOffset={4}>
      {children}
    </Autocomplete.Positioner>
  );
};

interface AutocompletePopupProps {
  children: React.ReactNode;
}
export const AutocompletePopup = ({ children }: AutocompletePopupProps) => {
  return (
    <Autocomplete.Popup className="max-h-92 w-(--anchor-width) max-w-(--available-width) rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
      {children}
    </Autocomplete.Popup>
  );
};

interface AutocompleteEmptyProps {
  children: React.ReactNode;
}
export const AutocompleteEmpty = ({ children }: AutocompleteEmptyProps) => {
  return (
    <Autocomplete.Empty className="p-4 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0">
      {children}
    </Autocomplete.Empty>
  );
};

export const AutocompleteList = () => {
  return (
    <Autocomplete.List className="max-h-[min(23rem,var(--available-height))] scroll-py-2 overflow-y-auto overscroll-contain py-2 outline-0 data-empty:p-0">
      {(tag: Tag) => <AutocompleteItem tag={tag} />}
    </Autocomplete.List>
  );
};

interface AutocompleteItemProps {
  tag: Tag;
}
export const AutocompleteItem = ({ tag }: AutocompleteItemProps) => {
  return (
    <Autocomplete.Item
      key={tag.id}
      className="flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900"
      value={tag}
    >
      {tag.value}
    </Autocomplete.Item>
  );
};

interface ClassicAutocompleteProps {
  tags: Tag[];
  label: string;
  placeholder: string;
  noTagsMessage: string;
  errorMessage?: string;
  onValueChange: (value: string) => void;
  value: string;
}
export const ClassicAutocomplete = ({
  tags,
  label,
  placeholder,
  noTagsMessage,
  errorMessage,
  onValueChange,
  value,
}: ClassicAutocompleteProps) => {
  return (
    <AutocompleteRoot
      value={value}
      onValueChange={onValueChange}
      tags={tags}
      label={label}
      placeholder={placeholder}
    >
      <AutocompletePortal>
        <AutocompletePositioner>
          <AutocompletePopup>
            <AutocompleteEmpty>{noTagsMessage}</AutocompleteEmpty>
            <AutocompleteList />
          </AutocompletePopup>
        </AutocompletePositioner>
      </AutocompletePortal>
      {errorMessage && (
        <Text variant="error" color="danger">
          {errorMessage}
        </Text>
      )}
    </AutocompleteRoot>
  );
};
