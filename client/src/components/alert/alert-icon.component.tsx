import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { cn } from '../../utils/cn';
import { AlertContext } from './alert.context';

const variants = cva(
  'flex justify-center items-center text-base-100 h-[2rem] w-[2rem] text-[15pt]',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100',
        success: 'bg-success-100',
        error: 'bg-error-100',
        warning: 'bg-warning-100',
        'edge-100': 'bg-edge-100',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export default function AlertIcon({ className, children, ...props }: Props) {
  const { variant } = useContext(AlertContext);

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={cn(variants({ variant: variant as any, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
