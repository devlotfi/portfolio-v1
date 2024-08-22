import ViewContent from '../layout/view-content.component';
import { useQuery } from '@tanstack/react-query';
import { CATEGORIES, PROJECTS } from '../react-query/queries';
import PageLoading from '../components/page-loading/page-loading.component';
import Heading from '../components/heading/heading.component';
import HeadingIcon from '../components/heading/heading-icon.component';
import HeadingText from '../components/heading/heading-text.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import ProjectSearch from '../components/project/project-search.component';
import Project from '../components/project/project.component';
import { useContext, useEffect, useRef } from 'react';
import { ProjectListContext } from '../context/project-list.context';
import ProjectPagination from '../components/project/project-pagination.component';
import ProjectDetails from '../components/project/project-details.component';

export default function ProjectsView() {
  const listRef = useRef<HTMLDivElement>(null);
  const { selectedProject, search, categories, page, setPage } =
    useContext(ProjectListContext);

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery({
    queryFn: CATEGORIES,
    queryKey: [CATEGORIES.name],
    refetchOnWindowFocus: false,
  });

  const { data: dataProjects, isLoading: isLoadingProjects } = useQuery({
    queryFn: PROJECTS,
    queryKey: [
      PROJECTS.name,
      {
        categories: categories.map((category) => category.id),
        page,
        search,
      },
    ],
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [categories, search, setPage]);

  return (
    <ViewContent
      reactRef={listRef}
      className="items-center relative overflow-x-hidden"
    >
      {selectedProject ? (
        <ProjectDetails></ProjectDetails>
      ) : (
        <div className="flex flex-col w-full p-[1rem] space-y-7 flex-1 lg:max-w-screen-lg">
          <Heading className="text-[20pt] w-full" variant="primary">
            <HeadingIcon>
              <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
            </HeadingIcon>
            <HeadingText>Projects</HeadingText>
          </Heading>
          <PageLoading loading={isLoadingCategories}>
            <ProjectSearch
              className="animate-[flipInX_0.7s_ease]"
              categories={dataCategories!}
            ></ProjectSearch>

            <PageLoading loading={isLoadingProjects}>
              <div className={'flex flex-wrap justify-between'}>
                {dataProjects?.results.map((project) => {
                  return <Project key={project.id} project={project}></Project>;
                })}
              </div>

              <ProjectPagination
                count={dataProjects?.count as number}
              ></ProjectPagination>
            </PageLoading>
          </PageLoading>
        </div>
      )}
    </ViewContent>
  );
}
