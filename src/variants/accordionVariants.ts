import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    item: "overflow-hidden rounded-md shadow-sm",
    trigger:
      "flex w-full items-center cursor-pointer justify-between p-4 text-left transition-colors",
    panel: "p-4",
    icon: "text-xl transition-transform",
  },
  variants: {
    variant: {
      primary: {
        item: "bg-blue-50 border-2 border-blue-200",
        trigger: "text-blue-900 hover:bg-blue-100",
        panel: "text-blue-800",
        icon: "text-blue-600",
      },
      secondary: {
        item: "bg-gray-50 border-2 border-gray-200",
        trigger: "text-gray-900 hover:bg-gray-100",
        panel: "text-gray-700",
        icon: "text-gray-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
});
export type AccordionVariants = VariantProps<typeof accordionVariants>;
