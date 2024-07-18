import ViewContent from "../layout/view-content.component";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, PROJECTS } from "../react-query/queries";
import PageLoading from "../components/page-loading/page-loading.component";
import Heading from "../components/heading/heading.component";
import HeadingIcon from "../components/heading/heading-icon.component";
import HeadingText from "../components/heading/heading-text.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectSearch from "../components/project-search/project-search.component";
import Project from "../components/project/project.component";
import { cn } from "../utils/cn";
import ProjectDetails from "../components/project/project-details.component";
import { useContext } from "react";
import { ProjectListContext } from "../context/project-list.context";

export default function ProjectsView() {
  const { showDetails } = useContext(ProjectListContext);

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery({
    queryFn: CATEGORIES,
    queryKey: [CATEGORIES.name],
  });

  const { data: dataProjects, isLoading: isLoadingProjects } = useQuery({
    queryFn: PROJECTS,
    queryKey: [
      PROJECTS.name,
      {
        categories: [],
        page: 1,
        search: "",
      },
    ],
  });

  return (
    <ViewContent
      className={cn("items-center relative", showDetails && "overflow-hidden")}
    >
      <PageLoading loading={isLoadingCategories}>
        <div className="flex flex-col w-full p-[1rem] space-y-7 flex-1 lg:max-w-screen-lg">
          <Heading className="text-[20pt]" variant="primary">
            <HeadingIcon>
              <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
            </HeadingIcon>
            <HeadingText>Projects</HeadingText>
          </Heading>
          <ProjectSearch categories={dataCategories!}></ProjectSearch>

          <PageLoading loading={isLoadingProjects}>
            <div className={cn("flex flex-wrap justify-between")}>
              {dataProjects?.results.map((project) => {
                return <Project key={project.id} project={project}></Project>;
              })}
            </div>
          </PageLoading>
        </div>
        <ProjectDetails></ProjectDetails>
      </PageLoading>
    </ViewContent>
  );
}
