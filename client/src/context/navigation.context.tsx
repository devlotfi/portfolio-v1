import { createContext, PropsWithChildren, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum Views {
  GLOBAL = "GLOBAL",
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
  SKILLS = "SKILLS",
  CONTACT = "CONTACT",
  EXPERIENCE = "EXPERIENCE",
}

export interface NavigationView {
  view: Views;
  verticalTranslation: string;
  horizontalTranslation: string;
}

const viewsMap = new Map<Views, NavigationView>();
viewsMap.set(Views.ABOUT, {
  view: Views.ABOUT,
  horizontalTranslation: "-100vw",
  verticalTranslation: "-100vh",
});
viewsMap.set(Views.SKILLS, {
  view: Views.SKILLS,
  horizontalTranslation: "0vw",
  verticalTranslation: "0vh",
});
viewsMap.set(Views.PROJECTS, {
  view: Views.PROJECTS,
  horizontalTranslation: "-200vw",
  verticalTranslation: "0vh",
});
viewsMap.set(Views.EXPERIENCE, {
  view: Views.EXPERIENCE,
  horizontalTranslation: "0vw",
  verticalTranslation: "-200vh",
});
viewsMap.set(Views.CONTACT, {
  view: Views.CONTACT,
  horizontalTranslation: "-200vw",
  verticalTranslation: "-200vh",
});

interface NavigationContext {
  currentView: NavigationView;
  setCurrentView: (view: Views) => void;
  isGlobalView: boolean;
  setIsGlobalView: (value: boolean) => void;
  isMoving: boolean;
  setIsMoving: (value: boolean) => void;
}

const initialValue: NavigationContext = {
  currentView: viewsMap.get(Views.ABOUT)!,
  setCurrentView() {},
  isGlobalView: false,
  setIsGlobalView() {},
  isMoving: false,
  setIsMoving() {},
};

export const NavigationContext = createContext(initialValue);

export function NavigationProvider({ children }: PropsWithChildren) {
  const [currentView, setCurrentViewState] = useState<NavigationView>(
    initialValue.currentView
  );
  const [isMoving, setIsMoving] = useState<boolean>(initialValue.isMoving);
  const [isGlobalView, setIsGlobalView] = useState<boolean>(
    initialValue.isGlobalView
  );

  const setCurrentView = (view: Views) => {
    setCurrentViewState(viewsMap.get(view) as NavigationView);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentView,
        setCurrentView,
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
