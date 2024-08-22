import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function GitSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 2501 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M2452.96 1138.65L1361.33 47.1501C1298.52 -15.7167 1196.57 -15.7167 1133.68 47.1501L907.011 273.838L1194.53 561.356C1261.37 538.788 1337.98 553.919 1391.24 607.185C1444.77 660.782 1459.79 738.049 1436.66 805.114L1713.78 1082.23C1780.82 1059.13 1858.17 1074.05 1911.7 1127.68C1986.55 1202.5 1986.55 1323.75 1911.7 1398.59C1836.85 1473.45 1715.61 1473.45 1640.71 1398.59C1584.43 1342.27 1570.51 1259.58 1599.02 1190.24L1340.58 931.8L1340.55 1611.89C1358.8 1620.92 1376.02 1632.97 1391.23 1648.11C1466.05 1722.93 1466.05 1844.15 1391.23 1919.09C1316.38 1993.9 1195.09 1993.9 1120.32 1919.09C1045.49 1844.15 1045.49 1722.93 1120.32 1648.11C1138.81 1629.65 1160.21 1615.68 1183.05 1606.31V919.908C1160.2 910.582 1138.83 896.713 1120.31 878.104C1063.63 821.465 1049.97 738.273 1079.04 668.667L795.607 385.187L47.165 1133.61C-15.7217 1196.52 -15.7217 1298.48 47.165 1361.35L1138.73 2452.85C1201.58 2515.72 1303.5 2515.72 1366.43 2452.85L2452.95 1366.5C2515.82 1303.61 2515.82 1201.62 2452.95 1138.74"
        className={fillColor}
      />
    </svg>
  );
}
