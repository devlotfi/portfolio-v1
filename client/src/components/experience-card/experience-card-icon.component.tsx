import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {}

export default function ExperienceIcon({
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={cn("flex bg-edge-100 p-[1rem]", className)} {...props}>
      {children}
    </div>
  );
}
