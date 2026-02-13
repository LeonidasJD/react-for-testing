import { tv, type VariantProps } from "tailwind-variants";

export const texareaVariants = tv({
  base: "w-full rounded-md border border-gray-300 p-2",
  variants: {
    variant: {
      primary: "bg-white",
      secondary: "bg-gray-100",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type TextareaVariants = VariantProps<typeof texareaVariants>;
