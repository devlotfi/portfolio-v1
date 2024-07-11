import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";

import { HeadingContext } from "./heading.context";
import { cn } from "../../utils/cn";

const variants = cva("flex", {
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

const HeadingIcon = ({ className, children, ...props }: Props): JSX.Element => {
  const { variant } = useContext(HeadingContext);

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={cn(variants({ variant: variant as any, className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default HeadingIcon;
