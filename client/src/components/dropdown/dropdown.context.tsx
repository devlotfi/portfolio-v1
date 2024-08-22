import { createContext } from 'react';

interface DropdownContext {
  position: string;
}

const initialValue: DropdownContext = {
  position: 'bottom-left',
};

export const DropdownContext = createContext(initialValue);
