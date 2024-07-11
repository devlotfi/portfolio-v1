import {
  faA,
  faAt,
  faGraduationCap,
  faLanguage,
  faListCheck,
  faMoon,
  faPaintRoller,
  faStar,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import LogoSVG from "../assets/svg/logo.component";
import ButtonContent from "../components/button/button-content.component";
import ButtonIcon from "../components/button/button-icon.component";
import ButtonSlider from "../components/button/button-slider.component";
import ButtonText from "../components/button/button-text.component";
import Button from "../components/button/button.component";
import DropdownContent from "../components/dropdown/dropdown-content.component";
import Dropdown from "../components/dropdown/dropdown.component";
import { NavigationContext, Views } from "../context/navigation.context";
import { SidebarContext } from "../context/sidebar.context";
import { ThemeContext } from "../context/theme.context";
import { Themes } from "../types/themes.type";
import { cn } from "../utils/cn";

export default function SidebarOverlay() {
  const { theme, setTheme } = useContext(ThemeContext);
  const {
    currentView,
    setCurrentView,
    setIsGlobalView,
    isMoving,
    setIsMoving,
  } = useContext(NavigationContext);
  const { open, setOpen } = useContext(SidebarContext);

  const navigate = (view: Views) => {
    if (!isMoving && view !== currentView.view) {
      setIsMoving(true);
      setIsGlobalView(true);
      setOpen(false);
      setTimeout(() => {
        setCurrentView(view);
        setIsGlobalView(false);
        setTimeout(() => {
          setIsMoving(false);
        }, 700);
      }, 700);
    }
  };

  return (
    <div
      className={cn(
        "fixed duration-300 top-0 left-0 lg:left-0 h-screen w-[17rem] flex flex-col bg-base-100 z-50 border-r border-edge-100 p-[1.5rem] pt-[3rem] overflow-y-auto overflow-x-hidden animate-[sidebar_0.5s_ease]",
        !open && "left-[-17rem]"
      )}
    >
      <div className="flex grow basis-0">
        <LogoSVG
          color="var(--edge-100)"
          className="my-[1rem] animate-[flipInX_0.7s_0.5s_ease] fill-mode-backward"
        ></LogoSVG>
      </div>

      <div className="flex flex-col m-0">
        <Button
          variant={currentView.view === Views.HOME ? "primary" : "edge-100"}
          active={currentView.view === Views.HOME}
          onClick={() => navigate(Views.HOME)}
          className="mb-[1rem] animate-[lightSpeedInLeft_1s_0.2s_ease] fill-mode-backward"
        >
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>
              {currentView.view === Views.HOME ? <>&gt;</> : null} Home
            </ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
        <Button
          variant={currentView.view === Views.SKILLS ? "primary" : "edge-100"}
          active={currentView.view === Views.SKILLS}
          onClick={() => navigate(Views.SKILLS)}
          className="mb-[1rem] animate-[lightSpeedInLeft_1s_0.4s_ease] fill-mode-backward"
        >
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>
              {currentView.view === Views.SKILLS ? <>&gt;</> : null} Skills
            </ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
        <Button
          variant={currentView.view === Views.PROJECTS ? "primary" : "edge-100"}
          active={currentView.view === Views.PROJECTS}
          onClick={() => navigate(Views.PROJECTS)}
          className="mb-[1rem] animate-[lightSpeedInLeft_1s_0.6s_ease] fill-mode-backward"
        >
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>
              {currentView.view === Views.PROJECTS ? <>&gt;</> : null} Projects
            </ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
        <Button
          variant={currentView.view === Views.STUDIES ? "primary" : "edge-100"}
          active={currentView.view === Views.STUDIES}
          onClick={() => navigate(Views.STUDIES)}
          className="mb-[1rem] animate-[lightSpeedInLeft_1s_0.8s_ease] fill-mode-backward"
        >
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>
              {currentView.view === Views.STUDIES ? <>&gt;</> : null} Studies
            </ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
        <Button
          variant={currentView.view === Views.CONTACT ? "primary" : "edge-100"}
          active={currentView.view === Views.CONTACT}
          onClick={() => navigate(Views.CONTACT)}
          className="mb-[1rem] animate-[lightSpeedInLeft_1s_1s_ease] fill-mode-backward"
        >
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>
              {currentView.view === Views.CONTACT ? <>&gt;</> : null} Contact
            </ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>

        <div className="flex space-x-2">
          <Dropdown position="bottom-left" className="w-full">
            <Button
              tabIndex={0}
              className="w-full fill-mode-backward animate-[flipInX_1s_0.5s_ease]"
            >
              <ButtonContent>
                <ButtonIcon>
                  <FontAwesomeIcon icon={faPaintRoller}></FontAwesomeIcon>
                </ButtonIcon>
                <ButtonText>Theme</ButtonText>
                <ButtonSlider></ButtonSlider>
              </ButtonContent>
            </Button>
            <DropdownContent tabIndex={0}>
              <Button
                onClick={() => setTheme(Themes.LIGHT)}
                variant={theme === Themes.LIGHT ? "primary" : "edge-100"}
                active={theme === Themes.LIGHT}
                className="w-full"
              >
                <ButtonContent>
                  <ButtonIcon>
                    <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                  </ButtonIcon>
                  <ButtonText>Light</ButtonText>
                  <ButtonSlider></ButtonSlider>
                </ButtonContent>
              </Button>
              <Button
                onClick={() => setTheme(Themes.DARK)}
                variant={theme === Themes.DARK ? "primary" : "edge-100"}
                active={theme === Themes.DARK}
                className="w-full"
              >
                <ButtonContent>
                  <ButtonIcon>
                    <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                  </ButtonIcon>
                  <ButtonText>Dark</ButtonText>
                  <ButtonSlider></ButtonSlider>
                </ButtonContent>
              </Button>
            </DropdownContent>
          </Dropdown>

          <Dropdown position="bottom-right" className="w-full">
            <Button
              tabIndex={0}
              className="w-full fill-mode-backward animate-[flipInX_1s_0.7s_ease]"
            >
              <ButtonContent>
                <ButtonIcon>
                  <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                </ButtonIcon>
                <ButtonText>EN</ButtonText>
                <ButtonSlider></ButtonSlider>
              </ButtonContent>
            </Button>
            <DropdownContent tabIndex={0}>
              <Button className="w-full">
                <ButtonContent>
                  <ButtonIcon>
                    <FontAwesomeIcon icon={faA}></FontAwesomeIcon>
                  </ButtonIcon>
                  <ButtonText>English</ButtonText>
                  <ButtonSlider></ButtonSlider>
                </ButtonContent>
              </Button>
              <Button className="w-full">
                <ButtonContent>
                  <ButtonIcon>
                    <FontAwesomeIcon icon={faA}></FontAwesomeIcon>
                  </ButtonIcon>
                  <ButtonText>French</ButtonText>
                  <ButtonSlider></ButtonSlider>
                </ButtonContent>
              </Button>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>

      <div className="flex grow basis-0"></div>
    </div>
  );
}
