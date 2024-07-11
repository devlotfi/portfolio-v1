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
  const { isGlobalView, currentView } = useContext(NavigationContext);

  return (
    <div className={cn(variants({ className }))} {...props}>
      <div
        className={cn(
          "flex justify-center items-center absolute top-0 left-0 lg:left-[17rem] bg-edge-100 h-screen w-screen lg:w-[calc(100vw-17rem)] duration-[0.7s] opacity-0 pointer-events-none z-50",
          isGlobalView && "opacity-100"
        )}
      >
        <div className="flex flex-col text-base-100">
          <FontAwesomeIcon
            className="text-[120pt]"
            icon={icon}
          ></FontAwesomeIcon>
          <div className="flex text-[50pt] md:text-[80pt]">{view}</div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen max-h-screen min-w-screen max-w-screen pl-0 pt-[3rem] lg:pt-0 lg:pl-[17rem] overflow-y-auto overflow-x-hidden z-10">
        {currentView.view === view ? children : null}
      </div>
    </div>
  );
};
export default ViewLayout;
