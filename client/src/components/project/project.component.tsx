import { BaseHTMLAttributes, useContext, useRef } from "react";
import { cn } from "../../utils/cn";
import { components } from "../../__generated__/schema";
import { ProjectListContext } from "../../context/project-list.context";
import ProjectReadme from "./project-readme.component";
import Button from "../button/button.component";
import ButtonContent from "../button/button-content.component";
import ButtonSlider from "../button/button-slider.component";
import ButtonIcon from "../button/button-icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import ButtonText from "../button/button-text.component";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  project: components["schemas"]["ProjectSerilizer"];
}

export default function Project({ className, project, ...props }: Props) {
  const projectRef = useRef<HTMLDivElement>(null);
  const { selectedProject, setSelectedProject } =
    useContext(ProjectListContext);

  const handleCardClick = () => {
    if (!selectedProject) {
      setSelectedProject(project);
    }
  };

  return (
    <div
      ref={projectRef}
      onClick={handleCardClick}
      className={cn(
        "flex w-full h-[25rem] md:w-[48%] mb-[1rem] border bg-edge-100 border-edge-100 duration-300",
        selectedProject?.id === project.id &&
          "!w-full h-[calc(100vh-3.8rem)] lg:h-[100vh] snap-center scroll-mt-[3.8rem] lg:scroll-mt-0 border-l border-r border-b-0 border-t-0",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col w-full space-y-3 border border-edge-100 duration-150 bg-base-100 hover:translate-x-[0.5rem] hover:translate-y-[-0.5em]",
          selectedProject?.id === project.id &&
            "overflow-y-auto !translate-x-0 !translate-y-0 border-none"
        )}
      >
        <div
          className={cn(
            "flex bg-base-100 justify-between items-center p-[0.7rem]",
            selectedProject?.id === project.id &&
              "sticky top-0 border-b border-edge-100"
          )}
        >
          <div className="flex space-x-3 justify-start">
            <div className="flex border border-edge-100">
              <div className="flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]">
                <img
                  className={cn(
                    "h-[3.5rem] w-[3.5rem]",
                    selectedProject?.id === project.id && "h-[2rem] w-[2rem]"
                  )}
                  src={project.icon}
                  alt="icon"
                />
              </div>
            </div>

            <div className="flex flex-col text-edge-100">
              <div className="flex">{project.name}</div>
              <div className="flex">{project.description}</div>
            </div>
          </div>

          {selectedProject?.id === project.id ? (
            <Button inverted onClick={() => setSelectedProject(null)}>
              <ButtonContent>
                <ButtonIcon>
                  <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
                </ButtonIcon>
                <ButtonText>Back</ButtonText>
                <ButtonSlider></ButtonSlider>
              </ButtonContent>
            </Button>
          ) : null}
        </div>

        {selectedProject?.id === project.id ? (
          <ProjectReadme project={project}></ProjectReadme>
        ) : (
          <div className="flex p-[0.7rem] overflow-hidden w-full h-full">
            <img
              className="h-full w-full overflow-hidden border border-edge-100 object-cover object-top"
              src={project.thumbnail}
              alt="thumbnail"
            />
          </div>
        )}
      </div>
    </div>
  );
}
