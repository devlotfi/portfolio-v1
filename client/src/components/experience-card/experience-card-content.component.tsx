import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {}

export default function ExperienceCardContent({
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={cn("flex flex-col space-y-2", className)} {...props}>
      {children}
    </div>
  );
}
