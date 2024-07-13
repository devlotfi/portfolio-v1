import {
  faMoon,
  faPaintRoller,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import LogoSVG from "../components/svg/logo.component";
import ButtonContent from "../components/button/button-content.component";
import ButtonIcon from "../components/button/button-icon.component";
import ButtonSlider from "../components/button/button-slider.component";
import Button from "../components/button/button.component";
import DropdownContent from "../components/dropdown/dropdown-content.component";
import Dropdown from "../components/dropdown/dropdown.component";
import { NavigationContext } from "../context/navigation.context";
import { ThemeContext } from "../context/theme.context";
import { Themes } from "../types/themes.type";
import { cn } from "../utils/cn";
import TransitionAudio from "../assets/audio/transition.wav";

export default function NavbarOverlay() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isGlobalView, setIsGlobalView, isMoving, setIsMoving } =
    useContext(NavigationContext);

  const switchGlobalView = () => {
    if (!isMoving) {
      if (isGlobalView) {
        setIsMoving(true);
        setIsGlobalView(false);

        setTimeout(() => {
          setIsMoving(false);
        }, 700);
      } else {
        setIsMoving(true);
        setIsGlobalView(true);

        setTimeout(() => {
          setIsMoving(false);
        }, 700);
      }

      const transitionAudio = new Audio(TransitionAudio);
      transitionAudio.play();
    }
  };

  return (
    <div
      className={cn(
        "fixed duration-300 top-0 left-0 lg:left-0 h-[3.8rem] lg:h-screen w-screen lg:w-[5rem] transition-transform flex lg:flex-col justify-between bg-base-100 z-50 border-b lg:border-r lg:border-b-0 border-edge-100 p-[0.5rem] animate-[sidebar_0.5s_ease]",
        !open && "left-[-5rem]"
      )}
    >
      <div className="flex justify-end">
        <Button className="w-full" onClick={switchGlobalView}>
          <ButtonContent className="justify-center">
            <ButtonIcon>
              <div
                className={cn(
                  "flex flex-col justify-between min-h-[1.3rem] min-w-[1.5rem]"
                )}
              >
                <div
                  className={cn(
                    "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300 origin-left",
                    isGlobalView && "rotate-45 translate-x-[0.2rem]"
                  )}
                ></div>
                <div
                  className={cn(
                    "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300",
                    isGlobalView && "translate-x-[-100%] opacity-0"
                  )}
                ></div>
                <div
                  className={cn(
                    "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300 origin-left",
                    isGlobalView && "-rotate-45 translate-x-[0.2rem]"
                  )}
                ></div>
              </div>
            </ButtonIcon>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
      </div>

      <div className="flex">
        <LogoSVG
          color="var(--edge-100)"
          className="animate-[flipInX_0.7s_0.5s_ease] fill-mode-backward"
        ></LogoSVG>
      </div>

      <Dropdown position="bottom-right" className="flax lg:hidden">
        <Button
          tabIndex={0}
          className="w-full fill-mode-backward animate-[flipInX_1s_0.5s_ease]"
        >
          <ButtonContent className="justify-center">
            <ButtonIcon>
              <FontAwesomeIcon icon={faPaintRoller}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
        <DropdownContent tabIndex={0} className="w-[4rem]">
          <Button
            onClick={() => setTheme(Themes.LIGHT)}
            variant={theme === Themes.LIGHT ? "primary" : "edge-100"}
            active={theme === Themes.LIGHT}
            className="w-full"
          >
            <ButtonContent className="px-0 justify-center">
              <ButtonIcon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </ButtonIcon>

              <ButtonSlider></ButtonSlider>
            </ButtonContent>
          </Button>
          <Button
            onClick={() => setTheme(Themes.DARK)}
            variant={theme === Themes.DARK ? "primary" : "edge-100"}
            active={theme === Themes.DARK}
            className="w-full"
          >
            <ButtonContent className="px-0 justify-center">
              <ButtonIcon>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              </ButtonIcon>

              <ButtonSlider></ButtonSlider>
            </ButtonContent>
          </Button>
        </DropdownContent>
      </Dropdown>
      <Dropdown position="top-left" className="hidden lg:flex lg:w-full">
        <Button
          tabIndex={0}
          className="w-full fill-mode-backward animate-[flipInX_1s_0.5s_ease]"
        >
          <ButtonContent className="justify-center lg:px-0">
            <ButtonIcon>
              <FontAwesomeIcon icon={faPaintRoller}></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
        <DropdownContent tabIndex={0} className="w-[4rem]">
          <Button
            onClick={() => setTheme(Themes.LIGHT)}
            variant={theme === Themes.LIGHT ? "primary" : "edge-100"}
            active={theme === Themes.LIGHT}
            className="w-full"
          >
            <ButtonContent className="px-0 justify-center">
              <ButtonIcon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </ButtonIcon>

              <ButtonSlider></ButtonSlider>
            </ButtonContent>
          </Button>
          <Button
            onClick={() => setTheme(Themes.DARK)}
            variant={theme === Themes.DARK ? "primary" : "edge-100"}
            active={theme === Themes.DARK}
            className="w-full"
          >
            <ButtonContent className="px-0 justify-center">
              <ButtonIcon>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              </ButtonIcon>

              <ButtonSlider></ButtonSlider>
            </ButtonContent>
          </Button>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}
