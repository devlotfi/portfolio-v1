import { BaseHTMLAttributes, useContext } from "react";
import { cn } from "../../utils/cn";
import { ProjectListContext } from "../../context/project-list.context";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonContent from "../button/button-content.component";
import ButtonIcon from "../button/button-icon.component";
import ButtonSlider from "../button/button-slider.component";
import ButtonText from "../button/button-text.component";
import Button from "../button/button.component";
import ProjectReadme from "./project-readme.component";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {}

export default function ProjectDetails({ className, ...props }: Props) {
  const { selectedProject, showDetails, setShowDetails } =
    useContext(ProjectListContext);

  return (
    <div
      className={cn(
        "flex flex-col absolute overflow-y-auto mt-[3.8rem] lg:mt-0 pb-[3rem] top-0 lg:pt-0 h-full max-h-[calc(100%-3.8rem)] lg:max-h-full w-full lg:w-[calc(100%-5rem)] bg-base-100 z-40 duration-500 translate-x-[100%]",
        showDetails && "translate-x-0",
        className
      )}
      {...props}
    >
      <div className="flex sticky top-0 bg-base-100 justify-between items-center border-b border-edge-100 p-[0.5rem]">
        <div className="flex items-center space-x-3 justify-start">
          <div className="flex border border-edge-100">
            <div className="flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]">
              <img
                className="h-[2rem] w-[2rem]"
                src={selectedProject?.icon}
                alt="icon"
              />
            </div>
          </div>

          <div className="flex flex-col text-edge-100">
            <div className="flex">{selectedProject?.name} (README.md)</div>
          </div>
        </div>

        <Button inverted onClick={() => setShowDetails(false)}>
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>Back</ButtonText>

            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
      </div>
      {selectedProject ? (
        <ProjectReadme project={selectedProject}></ProjectReadme>
      ) : null}
    </div>
  );
}
