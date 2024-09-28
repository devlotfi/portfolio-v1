import { createContext, PropsWithChildren, useState } from 'react';
import { Project } from '../types/project';

interface ProjectListContext {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;

  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
}

const initialValues: ProjectListContext = {
  selectedProject: null,
  setSelectedProject() {},
  search: '',
  setSearch() {},
  page: 1,
  setPage() {},
};

export const ProjectListContext = createContext(initialValues);

export function ProjectListProvider({ children }: PropsWithChildren) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    initialValues.selectedProject,
  );
  const [search, setSearch] = useState<string>(initialValues.search);
  const [page, setPage] = useState<number>(1);

  return (
    <ProjectListContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        search,
        setSearch,
        page,
        setPage,
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}
