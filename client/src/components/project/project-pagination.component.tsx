import { BaseHTMLAttributes, useContext } from "react";
import { cn } from "../../utils/cn";
import Button from "../button/button.component";
import ButtonContent from "../button/button-content.component";
import ButtonSlider from "../button/button-slider.component";
import ButtonText from "../button/button-text.component";
import { ProjectListContext } from "../../context/project-list.context";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  count: number;
}

export default function ProjectPagination({
  className,
  count,
  ...props
}: Props) {
  const { page, setPage } = useContext(ProjectListContext);

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];
    for (let i = 1; i <= Math.ceil(count / 10); i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => setPage(i)}
          active={i === page}
          variant={i === page ? "primary" : "edge-100"}
        >
          <ButtonContent>
            <ButtonText className="m-0">{i}</ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={cn("flex w-full justify-center", className)} {...props}>
      <div className="flex">{renderPageNumbers()}</div>
    </div>
  );
}
