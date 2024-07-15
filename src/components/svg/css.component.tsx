import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

const CssSVG = ({ className, fillColor, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1772 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <g clipPath="url(#clip0_98_11)">
        <path
          d="M416.831 0H685.386V112.305H529.136V224.609H685.386V336.914H416.831V0Z"
          className={fillColor}
        />
        <path
          d="M739.097 0H1007.65V97.6562H851.401V117.188H1007.65V341.797H739.097V239.258H895.347V219.727H739.097V0Z"
          className={fillColor}
        />
        <path
          d="M1061.36 0H1329.92V97.6562H1173.67V117.188H1329.92V341.797H1061.36V239.258H1217.61V219.727H1061.36V0Z"
          className={fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1609.81 2298.92L1771.16 491.309H0L161.187 2299.2L884.497 2500L1609.81 2298.92ZM329.585 860.864H884.814H885.581H1440.25L1400.22 1309.65L1394.81 1369.19L1339.38 1990.4L885.581 2116.17V2116.21L884.561 2116.49L430.361 1990.4L399.297 1642.25H621.88L637.666 1819.09L884.609 1885.77L884.815 1885.72V1885.7L1132.11 1818.95L1157.85 1531.38H885.581H884.815H389.39L369.517 1309.65L884.815 1309.65L885.581 1309.65L1177.08 1309.65L1197.26 1082.6H885.581H884.815H349.741L329.585 860.864Z"
          className={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_98_11">
          <rect width="1771.16" height="2500" className={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CssSVG;
