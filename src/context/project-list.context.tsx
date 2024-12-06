import { createContext, PropsWithChildren, useState } from 'react';

interface ProjectListContext {
  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
}

const initialValues: ProjectListContext = {
  search: '',
  setSearch() {},
  page: 1,
  setPage() {},
};

export const ProjectListContext = createContext(initialValues);

export function ProjectListProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = useState<string>(initialValues.search);
  const [page, setPage] = useState<number>(1);

  return (
    <ProjectListContext.Provider
      value={{
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
