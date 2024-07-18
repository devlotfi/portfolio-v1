import { BaseHTMLAttributes, useContext } from "react";
import { cn } from "../../utils/cn";
import { components } from "../../__generated__/schema";
import { ProjectListContext } from "../../context/project-list.context";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  project: components["schemas"]["ProjectSerilizer"];
}

export default function Project({ className, project, ...props }: Props) {
  const { setShowDetails, setSelectedProject } = useContext(ProjectListContext);

  const handleCardClick = () => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "flex w-full h-[25rem] md:w-[48%] mb-[1rem] border bg-edge-100 border-edge-100 duration-700",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col w-full space-y-3 border border-edge-100 duration-150 bg-base-100 p-[0.7rem] hover:translate-x-[0.5rem] hover:translate-y-[-0.5em]"
        )}
      >
        <div className="flex sticky top-0 bg-base-100 justify-between items-start pb-[1rem]">
          <div className="flex space-x-3 justify-start">
            <div className="flex border border-edge-100">
              <div className="flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]">
                <img
                  className="h-[3.5rem] w-[3.5rem]"
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
        </div>

        <img
          className="h-full overflow-hidden border border-edge-100 object-cover object-top"
          src={project.thumbnail}
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
