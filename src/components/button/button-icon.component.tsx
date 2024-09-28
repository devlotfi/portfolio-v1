import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex flex-col text-[15pt] z-10", {
  variants: {
    variant: {
      primary: "",
      success: "",
      error: "",
      warning: "",
      "edge-100": "",
    },
  },
  defaultVariants: {
    variant: "edge-100",
  },
});

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export default function ButtonIcon({
  variant,
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={cn(variants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}
