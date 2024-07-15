import { faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { Views } from "../context/navigation.context";
import ViewLayout from "../layout/view-layout.component";
import Developer from "../assets/svg/developer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonContent from "../components/button/button-content.component";
import ButtonIcon from "../components/button/button-icon.component";
import ButtonSlider from "../components/button/button-slider.component";
import Button from "../components/button/button.component";
import Profile from "../assets/img/profile.jpg";
import ViewContent from "../layout/view-content.component";
import HeadingIcon from "../components/heading/heading-icon.component";
import HeadingText from "../components/heading/heading-text.component";
import Heading from "../components/heading/heading.component";
import { useRef } from "react";
import ButtonText from "../components/button/button-text.component";

export default function HomeView() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  return (
    <ViewLayout view={Views.ABOUT} icon={faUser}>
      <ViewContent>
        <div className="flex flex-col relative min-h-full justify-start items-center lg:justify-center p-[1.5rem] md:p-0">
          <div className="flex w-full md:max-w-[90%] xl:max-w-[55rem] md:h-[20rem] mt-[3rem] lg:mt-0 bg-edge-100 animate-[fadeInRight_1s_ease] fill-mode-backward">
            <div className="flex flex-1 p-[1.5rem] md:p-[2rem] border translate-x-[0.5rem] translate-y-[-0.5rem] md:translate-x-[1rem] md:translate-y-[-1rem] border-edge-100 bg-base-100">
              <div className="flex flex-col md:flex-row flex-1 space-y-7 md:space-y-0 md:space-x-7">
                <img
                  className="w-[10rem] md:w-[20rem] animate-[flipInX_1s_0.5s_ease] fill-mode-backward"
                  src={Developer}
                  alt="developer"
                />

                <div className="flex flex-1 items-start  flex-col">
                  <div className="flex text-[17pt] md:text-[20pt] text-edge-100 animate-[fadeInUp_0.7s_0.3s_ease] fill-mode-backward">
                    Hello, i am
                  </div>
                  <div className="flex text-[20pt] md:text-[25pt] text-primary-100 font-bold animate-[fadeInUp_0.7s_0.7s_ease] fill-mode-backward font-['Press_Start_2P']">
                    DEBBAL LOTFI
                  </div>
                  <div className="flex text-[15pt] md:text-[20pt] text-edge-100 animate-[fadeInUp_0.7s_1s_ease] fill-mode-backward">
                    I am a Full-Stack Web & Mobile developer
                  </div>
                  <Button
                    onClick={() => {
                      if (aboutSectionRef.current) {
                        aboutSectionRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    variant="primary"
                    className="mt-[1rem] fill-mode-backward animate-[flipInX_1s_0.5s_ease]"
                  >
                    <ButtonContent>
                      <ButtonIcon>
                        <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                      </ButtonIcon>
                      <ButtonText>About me</ButtonText>

                      <ButtonSlider></ButtonSlider>
                    </ButtonContent>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="flex min-h-full justify-center items-start"
          ref={aboutSectionRef}
        >
          <div className="flex flex-col bg-base-100 mt-[3rem] items-start lg:flex-row md:border border-edge-100 p-[1rem] w-full md:max-w-[90%] xl:max-w-[55rem] space-y-5 lg:space-y-0 lg:space-x-5 text-edge-100">
            <img
              className="h-[15rem] min-w-[15rem] border border-edge-100 translate-x-[0.3rem] translate-y-[-0.3rem] bg-base-100"
              src={Profile}
              alt="profile"
            />
            <div className="flex flex-col space-y-3">
              <Heading className="text-[23pt]" variant="primary">
                <HeadingIcon>
                  <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                </HeadingIcon>
                <HeadingText>About me</HeadingText>
              </Heading>
              <div>
                I am a passionate full-stack web developer with a comprehensive
                background in both front-end and back-end development, as well
                as mobile development. Throughout my career, I have worked on a
                diverse range of projects, building robust and scalable web and
                mobile applications. My expertise spans designing intuitive user
                interfaces, developing efficient server-side logic
              </div>
              <div>
                I am committed to continuous learning and staying updated with
                the latest industry trends to deliver high-quality and
                innovative solutions. Whether working on a solo project or
                collaborating with a team, I strive to create user-centric
                applications that meet business objectives and provide
                exceptional user experiences.
              </div>
              <div>
                I hold a Bachelor's degree in Information Systems and Software
                Engineering from{" "}
                <a
                  className="inline text-primary-100 underline"
                  href="https://www.usthb.dz/"
                  target="_blank"
                >
                  USTHB University
                </a>
                , where I developed a strong foundation in software engineering
                principles.
              </div>
            </div>
          </div>
        </div>
      </ViewContent>
    </ViewLayout>
  );
}
