import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

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
      inverted: {
        true: "text-base-100",
      },
    },
    compoundVariants: [
      {
        variant: "edge-100",
        inverted: true,
        class: "hover:text-edge-100",
      },
      {
        variant: "primary",
        inverted: true,
        class: "hover:text-primary-100",
      },
      {
        variant: "error",
        inverted: true,
        class: "hover:text-error-100",
      },
      {
        variant: "warning",
        inverted: true,
        class: "hover:text-warning-100",
      },
      {
        variant: "success",
        inverted: true,
        class: "hover:text-success-100",
      },
    ],
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export default function Button({
  variant,
  className,
  children,
  active,
  inverted,
  ...props
}: Props) {
  return (
    <ButtonContext.Provider
      value={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        variant: variant as any,
        active: active as boolean,
        inverted: inverted as boolean,
      }}
    >
      <button
        className={cn(variants({ variant, className, active, inverted }))}
        {...props}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
}
