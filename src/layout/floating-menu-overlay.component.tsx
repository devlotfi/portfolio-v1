import { useContext } from "react";
import ButtonContent from "../components/button/button-content.component";
import ButtonIcon from "../components/button/button-icon.component";
import ButtonSlider from "../components/button/button-slider.component";
import Button from "../components/button/button.component";
import { SidebarContext } from "../context/sidebar.context";
import { cn } from "../utils/cn";

export default function FloatingMenuOverlay() {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <Button
      onClick={() => setOpen(!open)}
      className="fixed lg:hidden top-[1rem] left-[1rem] z-50"
      variant="edge-100"
    >
      <ButtonContent className="px-[0.7rem]">
        <ButtonIcon>
          <div
            className={cn(
              "flex flex-col justify-between min-h-[1.3rem] min-w-[1.5rem]"
            )}
          >
            <div
              className={cn(
                "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300 origin-left",
                open && "rotate-45 translate-x-[0.2rem]"
              )}
            ></div>
            <div
              className={cn(
                "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300",
                open && "translate-x-[-100%] opacity-0"
              )}
            ></div>
            <div
              className={cn(
                "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300 origin-left",
                open && "-rotate-45 translate-x-[0.2rem]"
              )}
            ></div>
          </div>
        </ButtonIcon>
        <ButtonSlider></ButtonSlider>
      </ButtonContent>
    </Button>
  );
}
