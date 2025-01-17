import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, JSX } from 'react';
import { cn } from '../../utils/cn';

const variants = cva('flex border border-edge-100 mt-[1rem]');

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  heading: JSX.Element;
}

export default function SkillCategory({
  className,
  children,
  heading,
  ...props
}: Props) {
  return (
    <div className={cn(variants({ className }))} {...props}>
      <div className="flex flex-col flex-1 translate-x-[0.5rem] translate-y-[-0.5rem] bg-base-100 items-start border border-edge-100 p-[1rem]">
        {heading}
        <div className="flex items-start flex-wrap gap-3">{children}</div>
      </div>
    </div>
  );
}
