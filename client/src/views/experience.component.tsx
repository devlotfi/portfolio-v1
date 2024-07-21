import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadingIcon from "../components/heading/heading-icon.component";
import Heading from "../components/heading/heading.component";
import UsthbSVG from "../components/svg/usthb.component";
import ViewContent from "../layout/view-content.component";
import { faCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import HeadingText from "../components/heading/heading-text.component";
import ExperienceCard from "../components/experience-card/experience-card.component";
import ExperienceIcon from "../components/experience-card/experience-card-icon.component";
import ExperienceCardContent from "../components/experience-card/experience-card-content.component";
import ExperienceItem from "../components/experience-card/experience-card-item.component";
import ExperienceCardMain from "../components/experience-card/experience-card-main.component";

const ANIMATION_DELAY = 0.3;
const ANIMATION_DURATION = 0.7;

export default function ExperienceView() {
  return (
    <ViewContent>
      <div className="flex flex-1 space-y-10 flex-col p-[1rem] items-center">
        <Heading className="text-[20pt]" variant="primary">
          <HeadingIcon>
            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
          </HeadingIcon>
          <HeadingText>Experience</HeadingText>
        </Heading>

        <div className="flex flex-col items-start">
          <ExperienceCard>
            <ExperienceCardMain
              date="10/07/2024"
              style={{
                animationDelay: `${ANIMATION_DELAY * 0}s`,
                animationDuration: `${ANIMATION_DURATION}s`,
              }}
              className="animate-[fadeInRight_ease] fill-mode-backward"
            >
              <ExperienceIcon>
                <UsthbSVG
                  className="h-[5.5rem]"
                  fillColor="fill-base-100"
                ></UsthbSVG>
              </ExperienceIcon>
              <ExperienceCardContent>
                <Heading>
                  <HeadingIcon>
                    <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                  </HeadingIcon>
                  <HeadingText>Bachelor's Degree</HeadingText>
                </Heading>
                <ExperienceItem>
                  Studied for a bachelor's degree at USTHB
                </ExperienceItem>
                <ExperienceItem>
                  Obtained a bachelor's degree in Information Systems and
                  Software Engineering
                </ExperienceItem>
                <ExperienceItem>
                  Completed several projects during the studies
                </ExperienceItem>
                <ExperienceItem>
                  Learned various technologies and skills
                </ExperienceItem>
              </ExperienceCardContent>
            </ExperienceCardMain>
          </ExperienceCard>

          <ExperienceCard>
            <ExperienceCardMain
              date="In Progress..."
              style={{
                animationDelay: `${ANIMATION_DELAY * 1}s`,
                animationDuration: `${ANIMATION_DURATION}s`,
              }}
              className="animate-[fadeInRight_ease] fill-mode-backward"
            >
              <ExperienceIcon>
                <UsthbSVG
                  className="h-[5.5rem]"
                  fillColor="fill-base-100"
                ></UsthbSVG>
              </ExperienceIcon>
              <ExperienceCardContent>
                <Heading>
                  <HeadingIcon>
                    <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                  </HeadingIcon>
                  <HeadingText>Master's Degree</HeadingText>
                </Heading>
                <ExperienceItem>
                  Currently studying for a master's degree
                </ExperienceItem>
                <ExperienceItem>
                  Specializing in Networks and Distributed Systems
                </ExperienceItem>
              </ExperienceCardContent>
            </ExperienceCardMain>
          </ExperienceCard>
        </div>
      </div>
    </ViewContent>
  );
}
