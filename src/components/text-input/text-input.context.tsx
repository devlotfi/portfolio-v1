import { createContext } from "react";

interface TextInputContext {
  variant: string;
  active: boolean;
}

const initialValue: TextInputContext = {
  variant: "edge-100",
  active: false,
};

export const TextInputContext = createContext(initialValue);
