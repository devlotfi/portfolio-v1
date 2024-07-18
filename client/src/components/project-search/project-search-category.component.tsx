import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/button.component";
import ButtonContent from "../button/button-content.component";
import ButtonSlider from "../button/button-slider.component";
import ButtonText from "../button/button-text.component";
import ButtonIcon from "../button/button-icon.component";
import { components } from "../../__generated__/schema";

interface Props extends BaseHTMLAttributes<HTMLButtonElement> {
  category: components["schemas"]["CategorySerilizer"];
}

export default function ProjectSearchCategory({
  className,
  category,
  ...props
}: Props) {
  return (
    <Button className={cn(className)} {...props}>
      <ButtonContent className="min-h-[2rem] px-[0.5rem]">
        <ButtonIcon>
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
        </ButtonIcon>

        <ButtonText className="m-0">{category.name}</ButtonText>
        <ButtonSlider></ButtonSlider>
      </ButtonContent>
    </Button>
  );
}
