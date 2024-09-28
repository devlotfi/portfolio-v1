import Social from '../components/social/social.component';
import GmailSVG from '../components/svg/gmail.component';
import GithubSVG from '../components/svg/github.component';
import XSVG from '../components/svg/x.component';
import InstagramSVG from '../components/svg/instagram.component';
import ViewContent from '../layout/view-content.component';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingIcon from '../components/heading/heading-icon.component';
import HeadingText from '../components/heading/heading-text.component';
import Heading from '../components/heading/heading.component';
import LinkedinSVG from '../components/svg/linkedin.component';

const SOCIALS_ANIMATION_DELAY = 0.2;
const SOCIALS_ANIMATION_DURATION = 0.5;

export default function ContactView() {
  return (
    <ViewContent>
      <div className="flex flex-1 justify-center md:items-center pt-[1rem]">
        <div className="flex flex-col pb-[3rem] md:flex-row md:justify-center items-center space-y-5 md:space-y-0 md:space-x-5 w-full">
          <div className="flex p-[1rem] flex-col md:border-b md:border-l border-edge-100">
            <Heading className="text-[20pt] mb-[1rem]" variant="primary">
              <HeadingIcon>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </HeadingIcon>
              <HeadingText>Contact me</HeadingText>
            </Heading>
            <div className="flex justify-center gap-3 flex-wrap">
              <Social
                className="animate-[fadeInLeft_ease] fill-mode-backward"
                style={{
                  animationDelay: `${SOCIALS_ANIMATION_DELAY * 1}s`,
                  animationDuration: `${SOCIALS_ANIMATION_DURATION}s`,
                }}
                href="mailto:debbal.lotfi.dev@gmail.com"
              >
                <GmailSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></GmailSVG>
              </Social>
              <Social
                className="animate-[fadeInLeft_ease] fill-mode-backward"
                style={{
                  animationDelay: `${SOCIALS_ANIMATION_DELAY * 2}s`,
                  animationDuration: `${SOCIALS_ANIMATION_DURATION}s`,
                }}
                href="https://github.com/devlotfi"
                target="_blank"
              >
                <GithubSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></GithubSVG>
              </Social>
              <Social
                className="animate-[fadeInLeft_ease] fill-mode-backward"
                style={{
                  animationDelay: `${SOCIALS_ANIMATION_DELAY * 3}s`,
                  animationDuration: `${SOCIALS_ANIMATION_DURATION}s`,
                }}
                href="https://www.linkedin.com/in/lotfi-debbal-64489a2ba/"
                target="_blank"
              >
                <LinkedinSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></LinkedinSVG>
              </Social>
              <Social
                className="animate-[fadeInLeft_ease] fill-mode-backward"
                style={{
                  animationDelay: `${SOCIALS_ANIMATION_DELAY * 4}s`,
                  animationDuration: `${SOCIALS_ANIMATION_DURATION}s`,
                }}
                href="https://x.com/LDebbal"
                target="_blank"
              >
                <XSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></XSVG>
              </Social>
              <Social
                className="animate-[fadeInLeft_ease] fill-mode-backward"
                style={{
                  animationDelay: `${SOCIALS_ANIMATION_DELAY * 5}s`,
                  animationDuration: `${SOCIALS_ANIMATION_DURATION}s`,
                }}
                href="https://www.instagram.com/lotfi_debbal/"
                target="_blank"
              >
                <InstagramSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></InstagramSVG>
              </Social>
            </div>
          </div>
        </div>
      </div>
    </ViewContent>
  );
}
