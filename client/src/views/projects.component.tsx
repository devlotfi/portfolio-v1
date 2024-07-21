import ViewContent from "../layout/view-content.component";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, PROJECTS } from "../react-query/queries";
import PageLoading from "../components/page-loading/page-loading.component";
import Heading from "../components/heading/heading.component";
import HeadingIcon from "../components/heading/heading-icon.component";
import HeadingText from "../components/heading/heading-text.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectSearch from "../components/project/project-search.component";
import Project from "../components/project/project.component";
import { cn } from "../utils/cn";
import { useContext, useEffect, useRef } from "react";
import { ProjectListContext } from "../context/project-list.context";
import ProjectPagination from "../components/project/project-pagination.component";
import ProjectReadme from "../components/project/project-readme.component";
import ButtonContent from "../components/button/button-content.component";
import ButtonIcon from "../components/button/button-icon.component";
import ButtonSlider from "../components/button/button-slider.component";
import ButtonText from "../components/button/button-text.component";
import Button from "../components/button/button.component";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function ProjectsView() {
  const listRef = useRef<HTMLDivElement>(null);
  const {
    selectedProject,
    setSelectedProject,
    search,
    categories,
    page,
    setPage,
  } = useContext(ProjectListContext);

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
        <div className="flex flex-col items-center w-full animate-[fadeInRight_0.7s_ease]">
          <div className="flex w-full bg-base-100 justify-between items-center p-[0.7rem] sticky top-0 border-b border-edge-100">
            <div className="flex flex-col sm:flex-row animate-[flipInX_0.7s_0.2s_ease] fill-mode-backward items-start sm:items-start sm:space-x-3 sm:justify-start">
              <div className="flex border border-edge-100">
                <div className="flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]">
                  <img
                    className={cn(
                      "h-[3.5rem] w-[3.5rem]",
                      selectedProject?.id === selectedProject.id &&
                        "h-[2rem] w-[2rem]"
                    )}
                    src={selectedProject.icon}
                    alt="icon"
                  />
                </div>
              </div>

              <div className="flex flex-col text-edge-100">
                <Heading>
                  <HeadingText className="pl-[0.3rem]">
                    {selectedProject.name}
                  </HeadingText>
                </Heading>
              </div>
            </div>

            <div className="flex flex-col-reverse items-end sm:items-start space-y-1 space-y-reverse sm:space-y-0 sm:space-x-2 sm:flex-row">
              <a href={selectedProject.repository}>
                <Button>
                  <ButtonContent>
                    <ButtonIcon>
                      <FontAwesomeIcon
                        icon={faGithub as IconProp}
                      ></FontAwesomeIcon>
                    </ButtonIcon>
                    <ButtonSlider></ButtonSlider>
                  </ButtonContent>
                </Button>
              </a>
              <Button inverted onClick={() => setSelectedProject(null)}>
                <ButtonContent>
                  <ButtonIcon>
                    <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
                  </ButtonIcon>
                  <ButtonText>Back</ButtonText>
                  <ButtonSlider></ButtonSlider>
                </ButtonContent>
              </Button>
            </div>
          </div>
          <ProjectReadme project={selectedProject}></ProjectReadme>
        </div>
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
              <div className={"flex flex-wrap justify-between"}>
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
