import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const FigmaSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1667 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M416.833 2500C646.833 2500 833.5 2313.33 833.5 2083.33V1666.67H416.833C186.833 1666.67 0.166504 1853.33 0.166504 2083.33C0.166504 2313.33 186.833 2500 416.833 2500Z"
        fill={color}
      />
      <path
        d="M0.166504 1250C0.166504 1020 186.833 833.333 416.833 833.333H833.5V1666.67H416.833C186.833 1666.67 0.166504 1480 0.166504 1250Z"
        fill={color}
      />
      <path
        d="M0.166504 416.667C0.166504 186.667 186.833 0 416.833 0H833.5V833.333H416.833C186.833 833.333 0.166504 646.667 0.166504 416.667Z"
        fill={color}
      />
      <path
        d="M833.5 0H1250.17C1480.17 0 1666.83 186.667 1666.83 416.667C1666.83 646.667 1480.17 833.333 1250.17 833.333H833.5V0Z"
        fill={color}
      />
      <path
        d="M1666.83 1250C1666.83 1480 1480.17 1666.67 1250.17 1666.67C1020.17 1666.67 833.5 1480 833.5 1250C833.5 1020 1020.17 833.333 1250.17 833.333C1480.17 833.333 1666.83 1020 1666.83 1250Z"
        fill={color}
      />
    </svg>
  );
};
export default FigmaSVG;
