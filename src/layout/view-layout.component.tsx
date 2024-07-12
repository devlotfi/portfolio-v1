import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Views, NavigationContext } from "../context/navigation.context";
import { cn } from "../utils/cn";

const variants = cva(
  "flex relative flex-col min-h-screen max-h-screen min-w-screen max-w-screen"
);

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
        <div className="flex relative flex-1 justify-center items-center flex-col bg-edge-100 border-[0.5rem] border-edge-100 duration-300 group-hover/view:translate-x-[3rem] group-hover/view:translate-y-[-3rem]">
          <div className="group-hover/view:w-full top-0 left-0 duration-300 flex absolute bg-base-100 h-full w-0"></div>

          <FontAwesomeIcon
            className="text-[130pt] z-20 group-hover/view:text-edge-100"
            icon={icon}
          ></FontAwesomeIcon>
          <div className="flex text-[50pt] md:text-[80pt] z-20 group-hover/view:text-edge-100">
            {view}
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen max-h-screen min-w-screen max-w-screen pl-0 pt-[3rem] lg:pt-0 lg:pl-[5rem] overflow-y-auto overflow-x-hidden z-10">
        {children}
      </div>
    </div>
  );
};
export default ViewLayout;
