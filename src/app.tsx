import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "./context/navigation.context";
import TransitionLoading from "./components/transition-loading/transition-loading.component";
import { EmptyView } from "./layout/empty-view.component";
import FloatingMenuOverlay from "./layout/floating-menu-overlay.component";
import SidebarOverlay from "./layout/sidebar-overlay.component";
import { cn } from "./utils/cn";
import ContactView from "./views/contact.component";
import HomeView from "./views/home.component";
import ProjectsView from "./views/projects.component";
import SkillsView from "./views/skills.component";
import StudiesView from "./views/studies.component";

const getShouldOffset = () => {
  return window.matchMedia("(min-width: 1024px)");
};

export default function App() {
  const { currentView, isMoving, isGlobalView } = useContext(NavigationContext);
  const [shouldOffset, setShouldOffset] = useState<boolean>(
    getShouldOffset().matches
  );

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setShouldOffset(e.matches);
    };
    getShouldOffset().addEventListener("change", handler);

    return () => {
      getShouldOffset().removeEventListener("change", handler);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen bg-base-100">
      <TransitionLoading></TransitionLoading>
      <SidebarOverlay></SidebarOverlay>
      <FloatingMenuOverlay></FloatingMenuOverlay>

      <div
        className={cn(
          "flex flex-1 main-background bg-center overflow-hidden duration-1000 bg-[length:3rem_3rem]",
          isGlobalView && "bg-[length:1.5rem_1.5rem]"
        )}
      >
        <div
          style={{
            transform: `translateX(${
              !isGlobalView
                ? currentView.horizontalTranslation
                : shouldOffset
                ? "calc(-100vw + 7rem)"
                : "-100vw"
            }) translateY(${
              !isGlobalView ? currentView.verticalTranslation : "-100vh"
            }) scale(${isGlobalView ? "25%" : "100%"})`,
          }}
          className={cn(
            "grid grid-cols-3 min-h-[300vh] min-w-[300vw]",
            isMoving && "duration-700"
          )}
        >
          <SkillsView></SkillsView>
          <EmptyView></EmptyView>
          <ProjectsView></ProjectsView>

          <EmptyView></EmptyView>
          <HomeView></HomeView>
          <EmptyView></EmptyView>

          <StudiesView></StudiesView>
          <EmptyView></EmptyView>
          <ContactView></ContactView>
        </div>
      </div>
    </div>
  );
}
