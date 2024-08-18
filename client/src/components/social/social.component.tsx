import { AnchorHTMLAttributes } from 'react';
import ButtonContent from '../button/button-content.component';
import ButtonSlider from '../button/button-slider.component';
import Button from '../button/button.component';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const variants = cva('flex');

interface Props
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof variants> {}

export default function Social({ className, children, ...props }: Props) {
  return (
    <a className={cn(variants({ className }))} {...props}>
      <Button>
        <ButtonContent className="flex-col justify-center h-[5.5rem] w-[5.5rem]">
          <div className="flex h-[2.5rem] w-[2.5rem] z-10">{children}</div>

          <ButtonSlider></ButtonSlider>
        </ButtonContent>
      </Button>
    </a>
  );
}
