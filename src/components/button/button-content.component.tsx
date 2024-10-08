import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";

import { ButtonContext } from "./button.context";
import { cn } from "../../utils/cn";

const variants = cva(
  "relative flex flex-1 h-full bg-base-100 duration-150 min-h-[2.5rem] px-[1rem] items-center border group-hover/button:translate-x-[0.3rem] group-hover/button:translate-y-[-0.3rem]",
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
        true: "translate-x-[0.3rem] translate-y-[-0.3rem]",
      },
      inverted: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "edge-100",
        inverted: true,
        class: "bg-edge-100",
      },
      {
        variant: "primary",
        inverted: true,
        class: "bg-primary-100",
      },
      {
        variant: "warning",
        inverted: true,
        class: "bg-warning-100",
      },
      {
        variant: "error",
        inverted: true,
        class: "bg-error-100",
      },
      {
        variant: "success",
        inverted: true,
        class: "bg-success-100",
      },
    ],
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export default function ButtonContent({
  className,
  children,
  ...props
}: Props) {
  const { variant, active, inverted } = useContext(ButtonContext);

  return (
    <div
      className={cn(
        variants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: (variant as any) || "edge-100",
          className,
          active,
          inverted,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
}
