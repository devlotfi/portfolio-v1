import Social from "../components/social/social.component";
import GmailSVG from "../components/svg/gmail.component";
import GithubSVG from "../components/svg/github.component";
import FacebookSVG from "../components/svg/facebook.component";
import InstagramSVG from "../components/svg/instagram.component";
import ViewContent from "../layout/view-content.component";
import Contact from "../assets/svg/contact.svg";

export default function ContactView() {
  return (
    <ViewContent>
      <div className="flex flex-1 justify-center md:items-center pt-[1rem]">
        <div className="flex flex-col md:flex-row items-center md:justify-center space-y-5 md:space-y-0 md:space-x-5 w-full">
          <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-3">
            <Social href="mailto:debbal.lotfi.dev@gmail.com">
              <GmailSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></GmailSVG>
            </Social>
            <Social href="https://github.com/devlotfi" target="_blank">
              <GithubSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></GithubSVG>
            </Social>
            <Social
              href="https://www.facebook.com/lotfi.debbal/"
              target="_blank"
            >
              <FacebookSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></FacebookSVG>
            </Social>
            <Social
              href="https://www.instagram.com/lotfi_debbal/"
              target="_blank"
            >
              <InstagramSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></InstagramSVG>
            </Social>
          </div>
          <div className="flex flex-col max-w-[30rem] p-[1rem] space-y-7 justify-center items-center md:border-b md:border-l border-edge-100">
            <img className="h-[10rem]" src={Contact} alt="contact" />
            <div className="flex text-edge-100 text-[15pt]">
              You can find me on social media and you can also check my Github
            </div>
          </div>
        </div>
      </div>
    </ViewContent>
  );
}
