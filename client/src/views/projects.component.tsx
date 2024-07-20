import ViewContent from "../layout/view-content.component";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, PROJECTS } from "../react-query/queries";
import PageLoading from "../components/page-loading/page-loading.component";
import Heading from "../components/heading/heading.component";
import HeadingIcon from "../components/heading/heading-icon.component";
import HeadingText from "../components/heading/heading-text.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectSearch from "../components/project/project-search.component";
import Project from "../components/project/project.component";
import { cn } from "../utils/cn";
import { useContext, useEffect, useRef } from "react";
import { ProjectListContext } from "../context/project-list.context";
import ProjectPagination from "../components/project/project-pagination.component";

export default function ProjectsView() {
  const listRef = useRef<HTMLDivElement>(null);
  const { selectedProject, search, categories, page } =
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
    listRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedProject, page]);

  return (
    <ViewContent
      reactRef={listRef}
      className={cn("items-center relative overflow-x-hidden")}
    >
      <PageLoading loading={isLoadingCategories}>
        <div className="flex flex-col w-full p-[1rem] space-y-7 flex-1 lg:max-w-screen-lg">
          {!selectedProject ? (
            <>
              <Heading className="text-[20pt]" variant="primary">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>Projects</HeadingText>
              </Heading>
              <ProjectSearch categories={dataCategories!}></ProjectSearch>
            </>
          ) : null}

          <PageLoading loading={isLoadingProjects}>
            <div className={cn("flex flex-wrap justify-between")}>
              {dataProjects?.results.map((project) => {
                return <Project key={project.id} project={project}></Project>;
              })}
            </div>

            {!selectedProject ? (
              <ProjectPagination
                count={dataProjects?.count as number}
              ></ProjectPagination>
            ) : null}
          </PageLoading>
        </div>
      </PageLoading>
    </ViewContent>
  );
}
