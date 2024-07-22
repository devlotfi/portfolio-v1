import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "./context/navigation.context";
import TransitionLoading from "./components/transition-loading/transition-loading.component";
import { EmptyView } from "./layout/empty-view.component";
import { cn } from "./utils/cn";
import NavbarOverlay from "./layout/navbar-overlay.component";
import {
  faAt,
  faBriefcase,
  faListCheck,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "./layout/view-layout.component";
import { ProjectListProvider } from "./context/project-list.context";
import { Outlet } from "react-router-dom";
import { Cursor } from "./components/cursor/cursor.component";

const getShouldOffset = () => {
  return window.matchMedia("(min-width: 1024px)");
};

export default function App() {
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

  return (
    <div className="group/cursor">
      <TransitionLoading></TransitionLoading>
      <NavbarOverlay></NavbarOverlay>

      <div className="flex h-screen w-screen bg-base-100 flex-1 main-background bg-center overflow-hidden duration-1000 bg-[length:3rem_3rem]">
        <Cursor></Cursor>

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
          <ViewLayout name="Skills" path="/skills" icon={faStar}>
            <Outlet></Outlet>
          </ViewLayout>
          <EmptyView></EmptyView>
          <ViewLayout name="Projects" path="/projects" icon={faListCheck}>
            <ProjectListProvider>
              <Outlet></Outlet>
            </ProjectListProvider>
          </ViewLayout>

          <EmptyView></EmptyView>
          <ViewLayout name="About" path="/" icon={faUser}>
            <Outlet></Outlet>
          </ViewLayout>
          <EmptyView></EmptyView>

          <ViewLayout name="Experience" path="/experience" icon={faBriefcase}>
            <Outlet></Outlet>
          </ViewLayout>
          <EmptyView></EmptyView>
          <ViewLayout name="Contact" path="/contact" icon={faAt}>
            <Outlet></Outlet>
          </ViewLayout>
        </div>
      </div>
    </div>
  );
}
