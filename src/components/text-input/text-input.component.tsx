import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

import { cn } from "../../utils/cn";
import { TextInputContext } from "./text-input.context";

const variants = cva(
  "group/text-input relative flex bg-base-100 border border-edge-100 mb-[2.8rem]",
  {
    variants: {
      variant: {
        primary: "border-primary-100",
        success: "border-success-100",
        error: "border-error-100",
        warning: "border-warning-100",
        "edge-100": "border-edge-100",
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
  extends BaseHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof variants> {}

export default function TextInput({
  variant,
  className,
  children,
  active,
  ...props
}: Props) {
  return (
    <TextInputContext.Provider
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value={{ variant: variant as any, active: active as any }}
    >
      <label
        className={cn(variants({ variant, className, active }))}
        {...props}
      >
        {children}
      </label>
    </TextInputContext.Provider>
  );
}
