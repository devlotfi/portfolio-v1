import { createContext, PropsWithChildren, useState } from 'react';
import { components } from '../__generated__/schema';

interface ProjectListContext {
  selectedProject: components['schemas']['ProjectSerilizer'] | null;
  setSelectedProject: (
    project: components['schemas']['ProjectSerilizer'] | null,
  ) => void;

  search: string;
  setSearch: (value: string) => void;
  categories: Array<components['schemas']['CategorySerilizer']>;
  addCategory: (category: components['schemas']['CategorySerilizer']) => void;
  deleteCategory: (id: string) => void;
  isCategorySelected: (id: string) => boolean;
  page: number;
  setPage: (value: number) => void;
}

const initialValues: ProjectListContext = {
  selectedProject: null,
  setSelectedProject() {},
  search: '',
  setSearch() {},
  categories: [],
  addCategory() {},
  deleteCategory() {},
  isCategorySelected() {
    return false;
  },
  page: 1,
  setPage() {},
};

export const ProjectListContext = createContext(initialValues);

export function ProjectListProvider({ children }: PropsWithChildren) {
  const [selectedProject, setSelectedProject] = useState<
    components['schemas']['ProjectSerilizer'] | null
  >(initialValues.selectedProject);
  const [search, setSearch] = useState<string>(initialValues.search);
  const [categories, setCategories] = useState<
    Array<components['schemas']['CategorySerilizer']>
  >(initialValues.categories);
  const [page, setPage] = useState<number>(1);

  const addCategory = (
    category: components['schemas']['CategorySerilizer'],
  ) => {
    setCategories([...categories, category]);
  };
  const deleteCategory = (id: string) => {
    const arr = [...categories];
    arr.splice(
      arr.findIndex((category) => category.id === id),
      1,
    );
    setCategories(arr);
  };
  const isCategorySelected = (id: string) => {
    return categories.findIndex((category) => category.id === id) !== -1;
  };

  return (
    <ProjectListContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        search,
        setSearch,
        categories,
        addCategory,
        deleteCategory,
        isCategorySelected,
        page,
        setPage,
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}
