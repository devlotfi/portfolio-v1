import { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

interface Props {
  name: string;
}

export default function Skill({ name, children }: PropsWithChildren<Props>) {
  return (
    <div className="group flex border border-edge-100">
      <button
        className={cn(
          "flex flex-col items-center justify-center border border-edge-100 bg-base-100 cursor-pointer h-[7rem] w-[7rem] group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.3rem] duration-150"
        )}
      >
        <div className="flex h-[3.7rem] w-[3.7rem]">{children}</div>
        <div className="flex text-edge-100 text-center">{name}</div>
      </button>
    </div>
  );
}
