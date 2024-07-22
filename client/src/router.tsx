import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import AboutView from "./views/home.component";
import SkillsView from "./views/skills.component";
import ProjectsView from "./views/projects.component";
import ExperienceView from "./views/experience.component";
import ContactView from "./views/contact.component";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <AboutView></AboutView>,
        },
        {
          path: "/skills",
          element: <SkillsView></SkillsView>,
        },
        {
          path: "/projects",
          element: <ProjectsView></ProjectsView>,
        },
        {
          path: "/experience",
          element: <ExperienceView></ExperienceView>,
        },
        {
          path: "/contact",
          element: <ContactView></ContactView>,
        },
      ],
    },
  ],
  {
    basename: "/portfolio-v1",
  }
);
