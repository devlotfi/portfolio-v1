import { faAt } from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "../layout/view-layout.component";
import { Views } from "../context/navigation.context";
import Social from "../components/social/social.component";
import GmailSVG from "../components/svg/gmail.component";
import GithubSVG from "../components/svg/github.component";
import FacebookSVG from "../components/svg/facebook.component";
import InstagramSVG from "../components/svg/instagram.component";

export default function ContactView() {
  return (
    <ViewLayout view={Views.CONTACT} icon={faAt}>
      <div className="flex flex-1 justify-center items-center">
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-3">
            <Social href="">
              <GmailSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></GmailSVG>
            </Social>
            <Social href="">
              <GithubSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></GithubSVG>
            </Social>
            <Social href="">
              <FacebookSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></FacebookSVG>
            </Social>
            <Social href="">
              <InstagramSVG fillColor="fill-edge-100 group-hover/button:fill-base-100"></InstagramSVG>
            </Social>
          </div>
          <div className="flex border-b border-l border-edge-100">
            <h1>form</h1>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
}
