import { BaseHTMLAttributes, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavigationContext } from "../context/navigation.context";
import { cn } from "../utils/cn";
import { useMatch, useNavigate } from "react-router-dom";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  path: string;
  name: string;
  icon: IconProp;
}

const ViewLayout = ({
  className,
  children,
  icon,
  path,
  name,
  ...props
}: Props): JSX.Element => {
  const navigate = useNavigate();
  const isActive = useMatch(path);

  const { isMoving, setIsMoving, isGlobalView, setIsGlobalView } =
    useContext(NavigationContext);

  const navigateToView = () => {
    if (!isMoving) {
      setIsMoving(true);
      navigate(path);
      setIsGlobalView(false);

      setTimeout(() => {
        setIsMoving(false);
      }, 700);
    }
  };

  return (
    <div
      className={cn("flex relative flex-col h-screen w-screen", className)}
      {...props}
    >
      <div
        onClick={navigateToView}
        className={cn(
          "group/view flex absolute top-0 left-0 bg-base-100 h-screen w-screen border-[0.5rem] border-edge-100 text-base-100 group-hover/view:text-edge-100 z-50 cursor-pointer pointer-events-none opacity-0 duration-700 transition-opacity",
          isGlobalView && "opacity-100 pointer-events-auto"
        )}
      >
        <div
          className={cn(
            "flex relative flex-1 justify-center items-center flex-col bg-edge-100 border-[0.5rem] border-edge-100 duration-300 lg:group-hover/view:translate-x-[2rem] lg:group-hover/view:translate-y-[-2rem]",
            isActive && "text-primary-100"
          )}
        >
          <FontAwesomeIcon
            className="text-[130pt] z-20"
            icon={icon}
          ></FontAwesomeIcon>
          <div className="flex text-[35pt] pl-[1rem] border-base-100 md:text-[80pt] z-20">
            {name}
          </div>
        </div>
      </div>

      <div className="flex">{isActive ? children : null}</div>
    </div>
  );
};
export default ViewLayout;
