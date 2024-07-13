import {
  faCode,
  faEllipsisH,
  faLaptopCode,
  faServer,
  faStar,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CssSVG from "../components/svg/css.component";
import DjangoSVG from "../components/svg/django.component";
import FigmaSVG from "../components/svg/figma.component";
import GitSVG from "../components/svg/git.component";
import GraphqlSVG from "../components/svg/graphql.component";
import HtmlSVG from "../components/svg/html.component";
import JavaSVG from "../components/svg/java.component";
import LinuxSVG from "../components/svg/linux.component";
import NestSVG from "../components/svg/nest.component";
import NodeSVG from "../components/svg/node.component";
import PostmanSVG from "../components/svg/postman.component";
import PythonSVG from "../components/svg/python.component";
import ReactSVG from "../components/svg/react.component";
import SpringBootSVG from "../components/svg/spring-boot.component";
import TailwindSVG from "../components/svg/tailwind.component";
import TypescriptSVG from "../components/svg/typescript.component";
import VscodeSVG from "../components/svg/vscode.component";
import HeadingIcon from "../components/heading/heading-icon.component";
import HeadingText from "../components/heading/heading-text.component";
import Heading from "../components/heading/heading.component";
import SkillCategory from "../components/skill-category/skill-category.component";
import Skill from "../components/skill/skill.component";
import { Views } from "../context/navigation.context";
import ViewLayout from "../layout/view-layout.component";

const DELAY = 0.3;

export default function SkillsView() {
  return (
    <ViewLayout view={Views.SKILLS} icon={faStar}>
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col w-full max-w-[55rem] p-[2rem] space-y-10">
          <Heading className="text-[23pt] mb-[1rem]" variant="primary">
            <HeadingIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </HeadingIcon>
            <HeadingText>Skills</HeadingText>
          </Heading>

          <SkillCategory
            style={{ animationDelay: `${DELAY * 0}s` }}
            className="animate-[fadeInLeft_0.7s_ease] fill-mode-backward"
            heading={
              <Heading className="text-[20pt] mb-[1rem]" variant="edge-100">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>Languages</HeadingText>
              </Heading>
            }
          >
            <Skill name="HTML">
              <HtmlSVG color="var(--edge-100)"></HtmlSVG>
            </Skill>
            <Skill name="CSS">
              <CssSVG color="var(--edge-100)"></CssSVG>
            </Skill>
            <Skill name="Typescript">
              <TypescriptSVG color="var(--edge-100)"></TypescriptSVG>
            </Skill>
            <Skill name="Python">
              <PythonSVG color="var(--edge-100)"></PythonSVG>
            </Skill>
            <Skill name="Java">
              <JavaSVG color="var(--edge-100)"></JavaSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{ animationDelay: `${DELAY * 1}s` }}
            className="animate-[fadeInLeft_0.7s_ease] fill-mode-backward"
            heading={
              <Heading className="text-[20pt] mb-[1rem]" variant="edge-100">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>Front-End</HeadingText>
              </Heading>
            }
          >
            <Skill name="React JS">
              <ReactSVG color="var(--edge-100)"></ReactSVG>
            </Skill>
            <Skill name="React Native">
              <ReactSVG color="var(--edge-100)"></ReactSVG>
            </Skill>
            <Skill name="Tailwind CSS">
              <TailwindSVG color="var(--edge-100)"></TailwindSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{ animationDelay: `${DELAY * 2}s` }}
            className="animate-[fadeInLeft_0.7s_ease] fill-mode-backward"
            heading={
              <Heading className="text-[20pt] mb-[1rem]" variant="edge-100">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>Back-End</HeadingText>
              </Heading>
            }
          >
            <Skill name="Node JS">
              <NodeSVG color="var(--edge-100)"></NodeSVG>
            </Skill>
            <Skill name="Nest JS">
              <NestSVG color="var(--edge-100)"></NestSVG>
            </Skill>
            <Skill name="Django">
              <DjangoSVG color="var(--edge-100)"></DjangoSVG>
            </Skill>
            <Skill name="Spring Boot">
              <SpringBootSVG color="var(--edge-100)"></SpringBootSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{ animationDelay: `${DELAY * 3}s` }}
            className="animate-[fadeInLeft_0.7s_ease] fill-mode-backward"
            heading={
              <Heading className="text-[20pt] mb-[1rem]" variant="edge-100">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>Tools</HeadingText>
              </Heading>
            }
          >
            <Skill name="VS Code">
              <VscodeSVG color="var(--edge-100)"></VscodeSVG>
            </Skill>
            <Skill name="Postman">
              <PostmanSVG color="var(--edge-100)"></PostmanSVG>
            </Skill>
            <Skill name="Figma">
              <FigmaSVG color="var(--edge-100)"></FigmaSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{ animationDelay: `${DELAY * 4}s` }}
            className="animate-[fadeInLeft_0.7s_ease] fill-mode-backward"
            heading={
              <Heading className="text-[20pt] mb-[1rem]" variant="edge-100">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>Other</HeadingText>
              </Heading>
            }
          >
            <Skill name="Graphql">
              <GraphqlSVG color="var(--edge-100)"></GraphqlSVG>
            </Skill>
            <Skill name="Git">
              <GitSVG color="var(--edge-100)"></GitSVG>
            </Skill>
            <Skill name="Linux">
              <LinuxSVG color="var(--edge-100)"></LinuxSVG>
            </Skill>
          </SkillCategory>
        </div>
      </div>
    </ViewLayout>
  );
}
