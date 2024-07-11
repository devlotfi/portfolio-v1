import { createContext } from "react";

interface HeadingContext {
  variant: string;
}

const initialValue: HeadingContext = {
  variant: "edge-100",
};

export const HeadingContext = createContext(initialValue);
