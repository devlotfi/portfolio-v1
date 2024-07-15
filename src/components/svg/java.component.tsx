import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

const JavaSVG = ({ className, fillColor, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1844 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M593.789 1933.35C593.789 1933.35 498.308 1988.92 661.817 2007.68C859.935 2030.3 961.172 2027.04 1179.43 1985.78C1179.43 1985.78 1236.93 2021.75 1317.09 2052.9C827.654 2262.6 209.395 2040.75 593.789 1933.35Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M533.951 1659.67C533.951 1659.67 426.846 1738.96 590.476 1755.88C802.127 1777.73 969.208 1779.52 1258.49 1723.84C1258.49 1723.84 1298.41 1764.39 1361.27 1786.55C769.608 1959.62 110.612 1800.17 533.951 1659.67Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1038.11 1195.35C1158.77 1334.24 1006.47 1459.12 1006.47 1459.12C1006.47 1459.12 1312.67 1301.09 1172.08 1103.08C1040.72 918.521 940.013 826.84 1485.22 510.656C1485.22 510.656 629.382 724.353 1038.11 1195.35Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1685.42 2135.81C1685.42 2135.81 1756.1 2194.08 1607.57 2239.14C1325.13 2324.69 431.806 2350.49 183.684 2242.56C94.5522 2203.74 261.777 2149.93 314.393 2138.57C369.253 2126.7 400.577 2128.87 400.577 2128.87C301.38 2059.01 -240.578 2266.06 125.323 2325.44C1123.15 2487.17 1944.21 2252.59 1685.42 2135.81Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M639.74 1376.06C639.74 1376.06 185.399 1484.01 478.853 1523.24C602.798 1539.82 849.731 1536.01 1079.91 1516.7C1267.98 1500.91 1456.71 1467.15 1456.71 1467.15C1456.71 1467.15 1390.45 1495.58 1342.47 1528.32C881 1649.69 -10.3075 1593.17 246.326 1469.08C463.263 1364.13 639.74 1376.06 639.74 1376.06Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1454.83 1831.62C1923.9 1587.94 1706.99 1353.74 1555.61 1385.29C1518.59 1393.01 1501.98 1399.7 1501.98 1399.7C1501.98 1399.7 1515.77 1378.1 1542.04 1368.8C1841.53 1263.56 2071.81 1679.3 1445.46 1843.96C1445.46 1843.96 1452.66 1837.43 1454.83 1831.62Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1172.08 0C1172.08 0 1431.8 259.869 925.668 659.361C519.783 979.947 833.124 1162.67 925.524 1371.54C688.579 1157.78 514.783 969.578 631.357 794.444C802.541 537.401 1276.85 412.737 1172.08 0Z"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M685.857 2492.16C1136.01 2520.94 1827.46 2476.14 1843.82 2263.12C1843.82 2263.12 1812.36 2343.87 1471.76 2407.95C1087.51 2480.29 613.477 2471.87 332.433 2425.46C332.433 2425.46 390.009 2473.12 685.857 2492.16Z"
        className={fillColor}
      />
    </svg>
  );
};
export default JavaSVG;
