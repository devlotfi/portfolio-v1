import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Views, NavigationContext } from "../context/navigation.context";
import { cn } from "../utils/cn";
import TransitionAudio from "../assets/audio/transition.wav";

const variants = cva("flex relative flex-col h-screen w-screen");

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  view: Views;
  icon: IconProp;
}

const ViewLayout = ({
  className,
  children,
  icon,
  view,
  ...props
}: Props): JSX.Element => {
  const {
    isMoving,
    setIsMoving,
    isGlobalView,
    setIsGlobalView,
    currentView,
    setCurrentView,
  } = useContext(NavigationContext);

  const navigateToView = () => {
    if (!isMoving) {
      setIsMoving(true);
      setCurrentView(view);
      setIsGlobalView(false);

      setTimeout(() => {
        setIsMoving(false);
      }, 700);

      const transitionAudio = new Audio(TransitionAudio);
      transitionAudio.play();
    }
  };

  return (
    <div className={cn(variants({ className }))} {...props}>
      <div
        onClick={navigateToView}
        className={cn(
          "group/view flex absolute top-0 left-0 lg:left-[5rem] bg-base-100 h-screen w-screen lg:w-[calc(100vw-5rem)] border-[0.5rem] border-edge-100 text-base-100 group-hover/view:text-edge-100 z-50 cursor-pointer pointer-events-none opacity-0 duration-700 transition-opacity",
          isGlobalView && "opacity-100 pointer-events-auto"
        )}
      >
        <div
          className={cn(
            "flex relative flex-1 justify-center items-center flex-col bg-edge-100 border-[0.5rem] border-edge-100 duration-300 lg:group-hover/view:translate-x-[2rem] lg:group-hover/view:translate-y-[-2rem]",
            currentView.view === view && "text-primary-100"
          )}
        >
          <FontAwesomeIcon
            className="text-[130pt] z-20"
            icon={icon}
          ></FontAwesomeIcon>
          <div className="flex text-[50pt] pl-[1rem] border-base-100 md:text-[80pt] z-20">
            {view}
          </div>
        </div>
      </div>

      {currentView.view === view ? children : null}
    </div>
  );
};
export default ViewLayout;