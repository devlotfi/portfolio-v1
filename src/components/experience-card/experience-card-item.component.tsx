import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {}

export default function ExperienceItem({
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "flex text-edge-100 ml-[1rem] items-center space-x-2",
        className
      )}
      {...props}
    >
      <div className="flex min-h-[0.5rem] min-w-[0.5rem] bg-primary-100"></div>
      <div className="flex">{children}</div>
    </div>
  );
}
