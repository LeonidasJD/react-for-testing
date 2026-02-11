import { tv, type VariantProps } from "tailwind-variants";

export const tabVariants = tv({
  slots: {
    root: "w-full max-w-264 rounded-md border",
    list: "relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] ",
    singleTab:
      "flex h-8 cursor-pointer items-center justify-center border-0 px-2 text-sm font-medium break-keep whitespace-nowrap  outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm before:-outline-offset-1 before:outline-blue-800  focus-visible:relative focus-visible:before:absolute focus-visible:before:outline-2 data-active:font-bold ",
    indicator:
      "absolute top-1/2 left-0 z-[-1] h-6 w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-sm  transition-all duration-200 ease-in-out",
    panel:
      "relative flex h-32 items-center justify-center -outline-offset-1 outline-blue-800 focus-visible:rounded-md focus-visible:outline-2",
  },

  variants: {
    variant: {
      light: {
        root: "border-white-400 bg-white",
        list: "shadow-gray-600 bg-gray-100",
        singleTab:
          "text-gray-600 hover:text-gray-900 data-active:text-gray-900",
        indicator: "bg-gray-100",
        panel: "text-gray-900",
      },
      dark: {
        root: "border-gray-600 bg-gray-900",
        list: "shadow-gray-200 bg-gray-500",
        singleTab: "text-white hover:text-gray-200 data-active:text-gray-100",
        indicator: "bg-white-100",
        panel: "text-white",
      },
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

export type TabVariants = VariantProps<typeof tabVariants>;
