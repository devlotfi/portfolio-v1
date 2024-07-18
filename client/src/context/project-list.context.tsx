import { createContext, PropsWithChildren, useState } from "react";
import { components } from "../__generated__/schema";

interface ProjectListContext {
  selectedProject: components["schemas"]["ProjectSerilizer"] | null;
  setSelectedProject: (
    project: components["schemas"]["ProjectSerilizer"] | null
  ) => void;
}

const initialValue: ProjectListContext = {
  selectedProject: null,
  setSelectedProject() {},
};

export const ProjectListContext = createContext(initialValue);

export function ProjectListProvider({ children }: PropsWithChildren) {
  const [selectedProject, setSelectedProject] = useState<
    components["schemas"]["ProjectSerilizer"] | null
  >(null);

  return (
    <ProjectListContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}
