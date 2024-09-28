import { PropsWithChildren } from "react";
import ButtonContent from "../button/button-content.component";
import ButtonSlider from "../button/button-slider.component";
import Button from "../button/button.component";

interface Props {
  name: string;
}

export default function Skill({ name, children }: PropsWithChildren<Props>) {
  return (
    <Button>
      <ButtonContent className="flex-col justify-center h-[7rem] w-[7rem]">
        <div className="flex justify-center items-center min-h-[3.5rem] min-w-[3.5rem] max-h-[3.5rem] max-w-[3.5rem] z-10">
          {children}
        </div>
        <div className="flex z-10 text-[11pt]">{name}</div>

        <ButtonSlider></ButtonSlider>
      </ButtonContent>
    </Button>
  );
}
