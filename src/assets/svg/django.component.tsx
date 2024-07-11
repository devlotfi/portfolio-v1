import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const DjangoSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1943 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M412.216 1281.1C410.91 1529.51 593.06 1677.6 883.733 1610.27V951.936C589.385 862.296 413.447 1043.65 412.216 1281.1ZM892.625 0H1292.97V1894.96C909.226 1957.7 541.696 1997.49 278.768 1850.47C-59.7749 1661.19 -86.9912 1059.69 180.899 791.793C316.723 655.978 590.162 560.362 883.733 622.758V26.6956C882.966 14.0628 882.256 1.48667 892.625 0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1942.42 418.136H1542.07V0H1942.42V418.136Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1942.41 629.855C1941.96 924.658 1942.02 1136.5 1941.99 1494.64C1924.99 1846.6 1928.94 2126.88 1800.07 2295.29C1774.65 2328.5 1720.68 2376.95 1675.52 2410.95C1637.59 2439.5 1565.31 2497.4 1524.27 2499.92C1482.91 2502.46 1376.64 2442.5 1328.54 2419.85C1265.39 2390.1 1207.01 2350.6 1141.73 2330.89C1294.01 2236.52 1438.56 2165.77 1497.58 1975.02C1548.91 1809.13 1542.07 1568.74 1542.07 1334.47C1542.07 1103.14 1543.1 834.203 1543.1 629.96L1942.41 629.855Z"
        fill={color}
      />
    </svg>
  );
};
export default DjangoSVG;
