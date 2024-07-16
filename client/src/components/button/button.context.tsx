import { createContext } from "react";

interface ButtonContext {
  variant: string;
  active: boolean;
  inverted: boolean;
}

const initialValue: ButtonContext = {
  variant: "edge-100",
  active: false,
  inverted: false,
};

export const ButtonContext = createContext(initialValue);
