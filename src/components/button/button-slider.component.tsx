import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";

import { ButtonContext } from "./button.context";
import { cn } from "../../utils/cn";

const variants = cva(
  "flex absolute h-full w-0 group-hover/button:w-full duration-150 top-0 left-0",
  {
    variants: {
      variant: {
        primary: "bg-primary-100",
        success: "bg-success-100",
        error: "bg-error-100",
        warning: "bg-warning-100",
        "edge-100": "bg-edge-100",
      },
      active: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

const ButtonSlider = ({
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const { variant, active } = useContext(ButtonContext);

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={cn(variants({ variant: variant as any, className, active }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default ButtonSlider;
