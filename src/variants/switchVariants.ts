import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  slots: {
    root: "relative flex h-6 w-10 rounded-full bg-linear-to-r  bg-size-[6.5rem_100%] bg-position-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px]  outline -outline-offset-1  transition-[background-position,box-shadow] duration-125 ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 focus-visible:before:inset-0 focus-visible:before:outline-2  data-checked:bg-position-[0%_0%]  dark:data-checked:shadow-none",
    thumb:
      "hover:cursor-pointer aspect-square h-full rounded-full  shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px]  transition-transform duration-150 data-checked:translate-x-4 dark:shadow-black/25",
    label: "flex items-center gap-2 text-base ",
    container: "flex",
  },
  variants: {
    variant: {
      primary: {
        root: "from-gray-700 from-35% to-gray-200 to-65% shadow-gray-200 outline-gray-200 before:outline-blue-800 active:bg-gray-100 data-checked:active:bg-gray-500 dark:from-gray-500 dark:shadow-black/75 dark:outline-white/15",
        thumb: "bg-white shadow-gray-100 dark:shadow-black/25",
        label: "text-gray-900",
      },
      secondary: {
        root: "from-blue-700 from-35% to-blue-200 to-65% shadow-blue-200 outline-blue-200 before:outline-blue-800 active:bg-blue-100 data-checked:active:bg-blue-500 dark:from-blue-500 dark:shadow-black/75 dark:outline-white/15",
        thumb: "bg-blue-900 shadow-gray-300 dark:shadow-black/25",
        label: "text-blue-900",
      },
    },
    position: {
      top: {
        container: "flex-col gap-2",
      },
      right: {
        container: "flex-row-reverse gap-2 items-center",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
