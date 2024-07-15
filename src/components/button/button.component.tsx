import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

import { ButtonContext } from "./button.context";
import { cn } from "../../utils/cn";

const variants = cva(
  "group/button flex border border-edge-100 cursor-pointer hover:text-base-100",
  {
    variants: {
      variant: {
        primary: "border-primary-100 text-primary-100",
        success: "border-success-100 text-success-100",
        error: "border-error-100 text-error-100",
        warning: "border-warning-100 text-warning-100",
        "edge-100": "border-edge-100 text-edge-100",
      },
      active: {
        true: "text-base-100",
      },
    },
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface Props
  extends BaseHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export default function Button({
  variant,
  className,
  children,
  active,
  ...props
}: Props) {
  return (
    <ButtonContext.Provider
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value={{ variant: variant as any, active: active as any }}
    >
      <button
        className={cn(variants({ variant, className, active }))}
        {...props}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
}
