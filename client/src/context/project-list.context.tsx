import { createContext, PropsWithChildren, useState } from "react";
import { components } from "../__generated__/schema";

interface ProjectListContext {
  selectedProject: components["schemas"]["ProjectSerilizer"] | null;
  setSelectedProject: (
    project: components["schemas"]["ProjectSerilizer"] | null
  ) => void;
  showDetails: boolean;
  setShowDetails: (value: boolean) => void;
}

const initialValue: ProjectListContext = {
  selectedProject: null,
  setSelectedProject() {},
  showDetails: false,
  setShowDetails() {},
};

export const ProjectListContext = createContext(initialValue);

export function ProjectListProvider({ children }: PropsWithChildren) {
  const [selectedProject, setSelectedProject] = useState<
    components["schemas"]["ProjectSerilizer"] | null
  >(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <ProjectListContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        showDetails,
        setShowDetails,
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}
