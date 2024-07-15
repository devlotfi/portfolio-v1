import { PropsWithChildren } from "react";
import ButtonContent from "../button/button-content.component";
import ButtonSlider from "../button/button-slider.component";
import Button from "../button/button.component";

interface Props {
  href: string;
}

export default function Social({ children, href }: PropsWithChildren<Props>) {
  return (
    <a href={href}>
      <Button>
        <ButtonContent className="flex-col justify-center h-[3.8rem] w-[3.8rem]">
          <div className="flex h-[2.5rem] w-[2.5rem] z-10">{children}</div>

          <ButtonSlider></ButtonSlider>
        </ButtonContent>
      </Button>
    </a>
  );
}
