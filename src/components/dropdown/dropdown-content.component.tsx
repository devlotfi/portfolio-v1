import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";

import { DropdownContext } from "./dropdown.context";
import { cn } from "../../utils/cn";

const variants = cva(
  "group-focus-within/dropdown:h-fit w-[10rem] scale-y-0 group-focus-within/dropdown:scale-y-100 overflow-hidden duration-300 absolute flex flex-col border border-edge-100 bg-base-100 z-50 p-[0.5rem] space-y-2",
  {
    variants: {
      position: {
        "top-left": "bottom-[3rem] left-0 origin-bottom",
        "top-right": "bottom-[3rem] right-0 origin-bottom",
        "bottom-left": "top-[3rem] left-0 origin-top",
        "bottom-right": "top-[3rem] right-0 origin-top",
      },
    },
    defaultVariants: {
      position: "bottom-left",
    },
  }
);

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

const DropdownContent = ({
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const { position } = useContext(DropdownContext);

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={cn(variants({ position: position as any, className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default DropdownContent;
