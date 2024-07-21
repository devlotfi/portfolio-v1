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
import ViewContent from "../layout/view-content.component";

const ANIMATION_DELAY = 0.3;
const ANIMATION_DURATION = 0.7;

export default function SkillsView() {
  return (
    <ViewContent>
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col w-full max-w-[55rem] p-[2rem] space-y-10">
          <Heading className="text-[23pt] mb-[1rem]" variant="primary">
            <HeadingIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </HeadingIcon>
            <HeadingText>Skills</HeadingText>
          </Heading>

          <SkillCategory
            style={{
              animationDelay: `${ANIMATION_DELAY * 0}s`,
              animationDuration: `${ANIMATION_DURATION}s`,
            }}
            className="animate-[fadeInLeft_ease] fill-mode-backward"
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
              <HtmlSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></HtmlSVG>
            </Skill>
            <Skill name="CSS">
              <CssSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></CssSVG>
            </Skill>
            <Skill name="Typescript">
              <TypescriptSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></TypescriptSVG>
            </Skill>
            <Skill name="Python">
              <PythonSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></PythonSVG>
            </Skill>
            <Skill name="Java">
              <JavaSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></JavaSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{
              animationDelay: `${ANIMATION_DELAY * 1}s`,
              animationDuration: `${ANIMATION_DURATION}s`,
            }}
            className="animate-[fadeInLeft_ease] fill-mode-backward"
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
              <ReactSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></ReactSVG>
            </Skill>
            <Skill name="React Native">
              <ReactSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></ReactSVG>
            </Skill>
            <Skill name="Tailwind CSS">
              <TailwindSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></TailwindSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{
              animationDelay: `${ANIMATION_DELAY * 2}s`,
              animationDuration: `${ANIMATION_DURATION}s`,
            }}
            className="animate-[fadeInLeft_ease] fill-mode-backward"
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
              <NodeSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></NodeSVG>
            </Skill>
            <Skill name="Nest JS">
              <NestSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></NestSVG>
            </Skill>
            <Skill name="Django">
              <DjangoSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></DjangoSVG>
            </Skill>
            <Skill name="Spring Boot">
              <SpringBootSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></SpringBootSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{
              animationDelay: `${ANIMATION_DELAY * 3}s`,
              animationDuration: `${ANIMATION_DURATION}s`,
            }}
            className="animate-[fadeInLeft_ease] fill-mode-backward"
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
              <VscodeSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></VscodeSVG>
            </Skill>
            <Skill name="Postman">
              <PostmanSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></PostmanSVG>
            </Skill>
            <Skill name="Figma">
              <FigmaSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></FigmaSVG>
            </Skill>
          </SkillCategory>
          <SkillCategory
            style={{
              animationDelay: `${ANIMATION_DELAY * 4}s`,
              animationDuration: `${ANIMATION_DURATION}s`,
            }}
            className="animate-[fadeInLeft_ease] fill-mode-backward"
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
              <GraphqlSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></GraphqlSVG>
            </Skill>
            <Skill name="Git">
              <GitSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></GitSVG>
            </Skill>
            <Skill name="Linux">
              <LinuxSVG
                className="max-h-full max-w-full"
                fillColor="fill-edge-100 group-hover/button:fill-base-100"
              ></LinuxSVG>
            </Skill>
          </SkillCategory>
        </div>
      </div>
    </ViewContent>
  );
}
