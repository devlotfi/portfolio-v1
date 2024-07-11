 

import { createContext } from "react";

interface ButtonContext {
  variant: string;
  active: boolean;
}

const initialValue: ButtonContext = {
  variant: "edge-100",
  active: false,
};

export const ButtonContext = createContext(initialValue);
