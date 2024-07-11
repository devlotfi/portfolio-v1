import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex-1 text-center");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const LogoSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 512 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M121.716 46.5H175.795L109.671 235.263L109.438 235.929H110.143H235.929V266.5H47.6958L121.716 46.5ZM425.357 235.429V266.5H268.5V46.5H425.357V77.5714V78.0714H425.857H456.929V109.143V109.643H457.429H488.5V203.357H457.429H456.929V203.857V234.929H425.857H425.357V235.429ZM330.643 235.429V235.929H331.143H394.286H394.786V235.429V204.357H425.857H426.357V203.857V109.143V108.643H425.857H394.786V77.5714V77.0714H394.286H331.143H330.643V77.5714V235.429Z"
        stroke={color}
      />
      <path
        d="M35 254L109.357 33H164.5L98.1429 222.429H224.429V254H35Z"
        fill={color}
      />
      <path
        d="M256 254V33H413.857V64.5714H445.429V96.1428H477V190.857H445.429V222.429H413.857V254H256ZM319.143 222.429H382.286V190.857H413.857V96.1428H382.286V64.5714H319.143V222.429Z"
        fill={color}
      />
    </svg>
  );
};
export default LogoSVG;
