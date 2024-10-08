import { useContext, useEffect, useState } from 'react';
import { NavigationContext, Views } from './context/navigation.context';
import TransitionLoading from './components/transition-loading/transition-loading.component';
import { EmptyView } from './layout/empty-view.component';
import { cn } from './utils/cn';
import ContactView from './views/contact.component';
import AboutView from './views/home.component';
import ProjectsView from './views/projects.component';
import SkillsView from './views/skills.component';
import ExperienceView from './views/experience.component';
import NavbarOverlay from './layout/navbar-overlay.component';
import {
  faAt,
  faBriefcase,
  faListCheck,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import ViewLayout from './layout/view-layout.component';
import { ProjectListProvider } from './context/project-list.context';

const getShouldOffset = () => {
  return window.matchMedia('(min-width: 1024px)');
};

export default function App() {
  const { currentView, isMoving, isGlobalView } = useContext(NavigationContext);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    getShouldOffset().matches,
  );

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };
    getShouldOffset().addEventListener('change', handler);

    return () => {
      getShouldOffset().removeEventListener('change', handler);
    };
  }, []);

  return (
    <>
      <TransitionLoading></TransitionLoading>
      <NavbarOverlay></NavbarOverlay>

      <div
        className={cn(
          'flex h-screen w-screen bg-base-100 flex-1 main-background bg-center overflow-hidden duration-1000 transition-[background-size] will-change-[background-size]',
          isGlobalView && 'main-background-global-view',
        )}
      >
        <div
          style={{
            transform: `translate3d(${
              !isGlobalView
                ? currentView.horizontalTranslation
                : isLargeScreen
                ? 'calc(-100vw + 2.2rem)'
                : '-100vw'
            }, ${
              !isGlobalView
                ? currentView.verticalTranslation
                : isLargeScreen
                ? '-100vh'
                : 'calc(-100vh + 2rem)'
            }, 0) scale3d(${isGlobalView ? '25%' : '100%'}, ${
              isGlobalView ? '25%' : '100%'
            }, 100%)`,
          }}
          className={cn(
            'grid grid-cols-3 min-h-[300vh] min-w-[300vw] transition-[transform] will-change-[transform]',
            isMoving && 'duration-700',
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
            <AboutView></AboutView>
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
    </>
  );
}
