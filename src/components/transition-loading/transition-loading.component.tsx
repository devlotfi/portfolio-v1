import { useContext } from "react";
import "./transition-loading.css";
import { NavigationContext } from "../../context/navigation.context";
import { cn } from "../../utils/cn";

export default function TransitionLoading() {
  const { isMoving } = useContext(NavigationContext);

  return (
    <div
      className={cn(
        "flex fixed z-[100] top-0 left-0 h-[0.3rem] w-0 bg-primary-100",
        isMoving && "animate-[transitionLoading_0.7s_ease]"
      )}
    ></div>
  );
}
