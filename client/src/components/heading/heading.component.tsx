import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

import { HeadingContext } from "./heading.context";
import { cn } from "../../utils/cn";

const variants = cva("flex items-center space-x-3", {
  variants: {
    variant: {
      primary: "text-primary-100",
      success: "text-success-100",
      error: "text-error-100",
      warning: "text-warning-100",
      "edge-100": "text-edge-100",
    },
  },
  defaultVariants: {
    variant: "edge-100",
  },
});

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export default function Heading({
  variant,
  className,
  children,
  ...props
}: Props) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <HeadingContext.Provider value={{ variant: variant as any }}>
      <div className={cn(variants({ variant, className }))} {...props}>
        {children}
      </div>
    </HeadingContext.Provider>
  );
}
