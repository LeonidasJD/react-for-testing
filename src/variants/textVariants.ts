import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans antialiased",
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl leading-tight",
      h2: "text-3xl md:text-4xl leading-tight",
      h3: "text-2xl md:text-3xl leading-snug",
      h4: "text-xl md:text-2xl leading-snug",
      base: "text-base leading-relaxed",
      caption: "text-sm leading-relaxed",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    color: {
      primary: "text-zinc-900",
      secondary: "text-zinc-600",
      muted: "text-zinc-400",
      danger: "text-red-500",
      success: "text-green-500",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "base",
    weight: "normal",
    color: "primary",
    align: "left",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
