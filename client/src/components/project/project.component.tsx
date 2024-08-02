import { BaseHTMLAttributes, useContext, useRef } from "react";
import { cn } from "../../utils/cn";
import { components } from "../../__generated__/schema";
import { ProjectListContext } from "../../context/project-list.context";
import Heading from "../heading/heading.component";
import HeadingText from "../heading/heading-text.component";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  project: components["schemas"]["ProjectSerilizer"];
}

export default function Project({ className, project, ...props }: Props) {
  const projectRef = useRef<HTMLDivElement>(null);
  const { selectedProject, setSelectedProject } =
    useContext(ProjectListContext);

  const handleCardClick = () => {
    if (selectedProject?.id !== project.id) {
      setSelectedProject(project);
    }
  };

  return (
    <div
      ref={projectRef}
      onClick={handleCardClick}
      className={cn(
        "flex w-full cursor-pointer md:w-[48%] mb-[1rem] border bg-edge-100 border-edge-100 duration-300",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between w-full space-y-3 border border-edge-100 duration-150 bg-base-100 hover:translate-x-[0.5rem] hover:translate-y-[-0.5em]">
        <div
          className={"flex bg-base-100 justify-between items-center p-[0.7rem]"}
        >
          <div className="flex space-x-3 justify-start items-start">
            <div className="flex border border-edge-100">
              <div className="flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]">
                <img
                  className={
                    "min-h-[3.5rem] min-w-[3.5rem] max-h-[3.5rem] max-w-[3.5rem]"
                  }
                  src={project.icon}
                  alt="icon"
                />
              </div>
            </div>

            <div className="flex flex-col text-edge-100">
              <Heading>
                <HeadingText className="pl-[0.3rem]">
                  {project.display_name}
                </HeadingText>
              </Heading>

              <div className="flex text-[10pt] opacity-70">
                {project.description}
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-[0.7rem] overflow-hidden w-full">
          <img
            className="h-full w-full overflow-hidden border border-edge-100 object-cover object-top"
            src={project.thumbnail}
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
}
