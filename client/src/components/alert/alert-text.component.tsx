import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const variants = cva("ml-[0.5rem]", {
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

export default function AlertText({
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
