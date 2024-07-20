import { useContext, useEffect, useRef, useState } from "react";
import { NavigationContext, Views } from "./context/navigation.context";
import TransitionLoading from "./components/transition-loading/transition-loading.component";
import { EmptyView } from "./layout/empty-view.component";
import { cn } from "./utils/cn";
import ContactView from "./views/contact.component";
import HomeView from "./views/home.component";
import ProjectsView from "./views/projects.component";
import SkillsView from "./views/skills.component";
import ExperienceView from "./views/experience.component";
import NavbarOverlay from "./layout/navbar-overlay.component";
import ClickAudio from "./assets/audio/click.wav";
import {
  faAt,
  faBriefcase,
  faListCheck,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "./layout/view-layout.component";
import { ProjectListProvider } from "./context/project-list.context";

const getShouldOffset = () => {
  return window.matchMedia("(min-width: 1024px)");
};

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const { currentView, isMoving, isGlobalView } = useContext(NavigationContext);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    getShouldOffset().matches
  );

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };
    getShouldOffset().addEventListener("change", handler);

    return () => {
      getShouldOffset().removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    const mouseDownHandler = () => {
      const clickAudio = new Audio(ClickAudio);
      clickAudio.play();
      setIsMouseDown(true);
    };

    const mouseUpHandler = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);

  return (
    <div className="group/cursor">
      <TransitionLoading></TransitionLoading>
      <NavbarOverlay></NavbarOverlay>

      <div
        className={cn(
          "flex h-screen w-screen bg-base-100 flex-1 main-background bg-center overflow-hidden duration-1000 bg-[length:3rem_3rem]",
          isGlobalView && "bg-[length:4.5rem_4.5rem]"
        )}
      >
        <div
          ref={cursorRef}
          id="cursor"
          className={cn(
            "hidden fixed group-hover/cursor:flex h-[2rem] w-[2rem] duration-75 transition-[height,width] bg-edge-100 border-base-100 border z-[1000]  pointer-events-none translate-x-[0.7rem] translate-y-[0.7rem]",
            isMouseDown && "h-[1.5rem] w-[1.5rem]"
          )}
        >
          <div className="flex bg-edge-100 border-base-100 border h-[0.7rem] w-[0.7rem] mt-[-0.7rem] ml-[-0.7rem]"></div>
        </div>

        <div
          style={{
            transform: `translateX(${
              !isGlobalView
                ? currentView.horizontalTranslation
                : isLargeScreen
                ? "calc(-100vw + 2.2rem)"
                : "-100vw"
            }) translateY(${
              !isGlobalView
                ? currentView.verticalTranslation
                : isLargeScreen
                ? "-100vh"
                : "calc(-100vh + 2rem)"
            }) scale(${isGlobalView ? "25%" : "100%"})`,
          }}
          className={cn(
            "grid grid-cols-3 min-h-[300vh] min-w-[300vw]",
            isMoving && "duration-700"
          )}
        >
          <ViewLayout view={Views.SKILLS} icon={faStar}>
            <SkillsView></SkillsView>
          </ViewLayout>
          <EmptyView></EmptyView>
          <ViewLayout view={Views.PROJECTS} icon={faListCheck}>
            <ProjectListProvider>
              <ProjectsView></ProjectsView>
            </ProjectListProvider>
          </ViewLayout>

          <EmptyView></EmptyView>
          <ViewLayout view={Views.ABOUT} icon={faUser}>
            <HomeView></HomeView>
          </ViewLayout>
          <EmptyView></EmptyView>

          <ViewLayout view={Views.EXPERIENCE} icon={faBriefcase}>
            <ExperienceView></ExperienceView>
          </ViewLayout>
          <EmptyView></EmptyView>
          <ViewLayout view={Views.CONTACT} icon={faAt}>
            <ContactView></ContactView>
          </ViewLayout>
        </div>
      </div>
    </div>
  );
}
