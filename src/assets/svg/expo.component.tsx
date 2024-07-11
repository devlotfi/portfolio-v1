import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const ExpoSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 2802 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M1327.51 919.013C1350.41 885.684 1375.48 881.336 1395.91 881.336C1416.2 881.336 1450.1 885.684 1473 919.013C1771.51 1325.63 2390.56 2398.24 2447.8 2456.64C2532.57 2543.15 2648.94 2489.25 2716.46 2391.14C2783.12 2294.49 2801.53 2226.67 2801.53 2154.36C2801.53 2105.09 1837.45 326.48 1740.21 178.383C1646.89 35.9374 1616.46 0 1456.77 0H1337.22C1177.82 0 1154.78 35.9374 1061.46 178.238C964.079 320.539 0 2099.15 0 2148.42C0 2220.87 18.4034 2288.55 85.0616 2385.2C152.589 2483.3 268.951 2537.36 353.723 2450.7C410.962 2392.3 1029.14 1319.69 1327.51 913.216V919.013Z"
        fill={color}
      />
    </svg>
  );
};
export default ExpoSVG;
