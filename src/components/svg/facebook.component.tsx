import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

const FacebookSVG = ({
  className,
  fillColor,
  ...props
}: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1250C0 1868.75 450 2381.25 1043.75 2487.5L1051.14 2481.46C1050.76 2481.39 1050.38 2481.32 1050 2481.25V1600H737.5V1250H1050V975C1050 662.5 1250 487.5 1537.5 487.5C1625 487.5 1725 500 1812.5 512.5V831.25H1650C1500 831.25 1462.5 906.25 1462.5 1006.25V1250H1793.75L1737.5 1600H1462.5V2481.25C1458.69 2481.94 1454.89 2482.62 1451.08 2483.27L1456.25 2487.5C2050 2381.25 2500 1868.75 2500 1250C2500 562.5 1937.5 0 1250 0C562.5 0 0 562.5 0 1250Z"
        className={fillColor}
      />
    </svg>
  );
};
export default FacebookSVG;
