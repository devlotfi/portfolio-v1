import { createContext, PropsWithChildren, useState } from "react";
import { useMatch } from "react-router-dom";

export interface RouteMetadata {
  verticalTranslation: string;
  horizontalTranslation: string;
}

interface NavigationContext {
  currentView: RouteMetadata;
  isGlobalView: boolean;
  setIsGlobalView: (value: boolean) => void;
  isMoving: boolean;
  setIsMoving: (value: boolean) => void;
}

const initialValue: NavigationContext = {
  currentView: {
    horizontalTranslation: "-100vw",
    verticalTranslation: "-100vh",
  },
  isGlobalView: false,
  setIsGlobalView() {},
  isMoving: false,
  setIsMoving() {},
};

export const NavigationContext = createContext(initialValue);

export function NavigationProvider({ children }: PropsWithChildren) {
  const [isMoving, setIsMoving] = useState<boolean>(initialValue.isMoving);
  const [isGlobalView, setIsGlobalView] = useState<boolean>(
    initialValue.isGlobalView
  );

  const isAboutRoute = useMatch("/");
  const isSkillsRoute = useMatch("/skills");
  const isProjectsRoute = useMatch("/projects");
  const isExperienceRoute = useMatch("/experience");
  const isContacRoute = useMatch("/contact");

  const getMetadata = (): RouteMetadata =>
    isAboutRoute
      ? { horizontalTranslation: "-100vw", verticalTranslation: "-100vh" }
      : isSkillsRoute
      ? { horizontalTranslation: "0vw", verticalTranslation: "0vh" }
      : isProjectsRoute
      ? { horizontalTranslation: "-200vw", verticalTranslation: "0vh" }
      : isExperienceRoute
      ? { horizontalTranslation: "0vw", verticalTranslation: "-200vh" }
      : isContacRoute
      ? { horizontalTranslation: "-200vw", verticalTranslation: "-200vh" }
      : initialValue.currentView;

  return (
    <NavigationContext.Provider
      value={{
        currentView: getMetadata(),
        isGlobalView,
        setIsGlobalView,
        isMoving,
        setIsMoving,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
