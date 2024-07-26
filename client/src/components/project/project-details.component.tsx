import { useContext } from "react";
import { ProjectListContext } from "../../context/project-list.context";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../utils/cn";
import ButtonContent from "../button/button-content.component";
import ButtonIcon from "../button/button-icon.component";
import ButtonSlider from "../button/button-slider.component";
import ButtonText from "../button/button-text.component";
import Button from "../button/button.component";
import HeadingText from "../heading/heading-text.component";
import Heading from "../heading/heading.component";
import ProjectReadme from "./project-readme.component";

export default function ProjectDetails() {
  const { selectedProject, setSelectedProject } =
    useContext(ProjectListContext);

  if (selectedProject)
    return (
      <div className="flex flex-col items-center w-full animate-[fadeInRight_0.7s_ease]">
        <div className="flex w-full bg-base-100 justify-between items-center p-[0.7rem] sticky top-0 border-b border-edge-100">
          <div className="flex flex-col sm:flex-row animate-[flipInX_0.7s_0.2s_ease] fill-mode-backward items-start sm:items-start sm:space-x-3 sm:justify-start">
            <div className="flex border border-edge-100">
              <div className="flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]">
                <img
                  className={cn(
                    "h-[3.5rem] w-[3.5rem]",
                    selectedProject?.id === selectedProject.id &&
                      "h-[2rem] w-[2rem]"
                  )}
                  src={selectedProject.icon}
                  alt="icon"
                />
              </div>
            </div>

            <div className="flex flex-col text-edge-100">
              <Heading>
                <HeadingText className="pl-[0.3rem]">
                  {selectedProject.name}
                </HeadingText>
              </Heading>
            </div>
          </div>

          <div className="flex flex-col-reverse items-end sm:items-start space-y-1 space-y-reverse sm:space-y-0 sm:space-x-2 sm:flex-row">
            <a href={selectedProject.repository} target="_blank">
              <Button>
                <ButtonContent>
                  <ButtonIcon>
                    <FontAwesomeIcon
                      icon={faGithub as IconProp}
                    ></FontAwesomeIcon>
                  </ButtonIcon>
                  <ButtonSlider></ButtonSlider>
                </ButtonContent>
              </Button>
            </a>
            <Button inverted onClick={() => setSelectedProject(null)}>
              <ButtonContent>
                <ButtonIcon>
                  <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
                </ButtonIcon>
                <ButtonText>Back</ButtonText>
                <ButtonSlider></ButtonSlider>
              </ButtonContent>
            </Button>
          </div>
        </div>
        <ProjectReadme project={selectedProject}></ProjectReadme>
      </div>
    );
}
