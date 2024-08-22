import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { AlertContext } from './alert.context';
import { cn } from '../../utils/cn';

const variants = cva(
  'group/button flex items-center border border-edge-100 p-[0.5rem] w-full',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 text-primary-100',
        success: 'border-success-100 text-success-100',
        error: 'border-error-100 text-error-100',
        warning: 'border-warning-100 text-warning-100',
        'edge-100': 'border-edge-100 text-edge-100',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export default function Alert({
  variant,
  className,
  children,
  ...props
}: Props) {
  return (
    <AlertContext.Provider
      value={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        variant: variant as any,
      }}
    >
      <button className={cn(variants({ variant, className }))} {...props}>
        {children}
      </button>
    </AlertContext.Provider>
  );
}
