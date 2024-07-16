import {
  faAt,
  faEnvelope,
  faFileText,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "../layout/view-layout.component";
import { Views } from "../context/navigation.context";
import Social from "../components/social/social.component";
import GmailSVG from "../components/svg/gmail.component";
import GithubSVG from "../components/svg/github.component";
import FacebookSVG from "../components/svg/facebook.component";
import InstagramSVG from "../components/svg/instagram.component";
import TextInput from "../components/text-input/text-input.component";
import TextInputContent from "../components/text-input/text-input-content.component";
import TextInputField from "../components/text-input/text-input-field.component";
import TextInputLabel from "../components/text-input/text-input-label.component";
import TextInputIcon from "../components/text-input/text-input-icon.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInputMessage from "../components/text-input/text-input-message.component";
import HeadingIcon from "../components/heading/heading-icon.component";
import HeadingText from "../components/heading/heading-text.component";
import Heading from "../components/heading/heading.component";
import Button from "../components/button/button.component";
import ButtonContent from "../components/button/button-content.component";
import ButtonSlider from "../components/button/button-slider.component";
import ButtonIcon from "../components/button/button-icon.component";
import ButtonText from "../components/button/button-text.component";
import ViewContent from "../layout/view-content.component";

export default function ContactView() {
  return (
    <ViewLayout view={Views.CONTACT} icon={faAt}>
      <ViewContent>
        <div className="flex flex-1 justify-center md:items-center pt-[1rem]">
          <div className="flex flex-col md:flex-row md:justify-center items-center space-y-5 md:space-y-0 md:space-x-5 w-full">
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
            <div className="flex w-full max-w-[38rem] flex-col md:border-b md:border-l border-edge-100">
              <form className="p-[1rem]">
                <Heading className="text-[20pt] mb-[1rem]" variant="primary">
                  <HeadingIcon>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </HeadingIcon>
                  <HeadingText>Contact me</HeadingText>
                </Heading>

                <TextInput variant="edge-100">
                  <TextInputLabel>E-mail</TextInputLabel>
                  <TextInputContent>
                    <TextInputIcon>
                      <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                    </TextInputIcon>
                    <TextInputField placeholder="E-mail"></TextInputField>
                    <TextInputMessage>Error</TextInputMessage>
                  </TextInputContent>
                </TextInput>
                <TextInput variant="edge-100">
                  <TextInputLabel>Subject</TextInputLabel>
                  <TextInputContent>
                    <TextInputIcon>
                      <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </TextInputIcon>
                    <TextInputField placeholder="Subject"></TextInputField>
                    <TextInputMessage>Error</TextInputMessage>
                  </TextInputContent>
                </TextInput>
                <TextInput variant="edge-100">
                  <TextInputLabel>Content</TextInputLabel>
                  <TextInputContent>
                    <TextInputIcon>
                      <FontAwesomeIcon icon={faFileText}></FontAwesomeIcon>
                    </TextInputIcon>
                    <TextInputField placeholder="Content"></TextInputField>
                    <TextInputMessage>Error</TextInputMessage>
                  </TextInputContent>
                </TextInput>

                <Button
                  inverted
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  <ButtonContent>
                    <ButtonIcon>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </ButtonIcon>
                    <ButtonText>Send</ButtonText>

                    <ButtonSlider></ButtonSlider>
                  </ButtonContent>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </ViewContent>
    </ViewLayout>
  );
}
