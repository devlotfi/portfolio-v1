import ViewContent from '../layout/view-content.component';
import Heading from '../components/heading/heading.component';
import HeadingIcon from '../components/heading/heading-icon.component';
import HeadingText from '../components/heading/heading-text.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import ProjectSearch from '../components/project/project-search.component';
import ProjectItem from '../components/project/project.component';
import { useContext, useEffect, useRef } from 'react';
import { ProjectListContext } from '../context/project-list.context';
import ProjectPagination from '../components/project/project-pagination.component';
import ProjectDetails from '../components/project/project-details.component';
import { projects } from '../data/projects';

export default function ProjectsView() {
  const listRef = useRef<HTMLDivElement>(null);
  const { selectedProject, search, page, setPage } =
    useContext(ProjectListContext);

  useEffect(() => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [search, setPage]);

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
          <ProjectSearch className="animate-[flipInX_0.7s_ease]"></ProjectSearch>

          <div className={'flex flex-wrap justify-between'}>
            {projects
              .filter((project) =>
                project.displayName
                  .toLowerCase()
                  .includes(search.toLowerCase()),
              )
              .slice(10 * (page - 1), 10 * page)
              .map((project) => {
                return (
                  <ProjectItem key={project.id} project={project}></ProjectItem>
                );
              })}
          </div>

          <ProjectPagination
            count={
              projects.filter((project) =>
                project.displayName
                  .toLowerCase()
                  .includes(search.toLowerCase()),
              ).length
            }
          ></ProjectPagination>
        </div>
      )}
    </ViewContent>
  );
}
