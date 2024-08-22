import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';

import { DropdownContext } from './dropdown.context';
import { cn } from '../../utils/cn';

const variants = cva('group/dropdown flex relative', {
  variants: {
    position: {
      'top-left': '',
      'top-right': '',
      'bottom-left': '',
      'bottom-right': '',
    },
  },
  defaultVariants: {
    position: 'bottom-left',
  },
});

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export default function Dropdown({
  position,
  className,
  children,
  ...props
}: Props) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <DropdownContext.Provider value={{ position: position as any }}>
      <div className={cn(variants({ position, className }))} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
