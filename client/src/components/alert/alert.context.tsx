import { createContext } from 'react';

interface AlertContext {
  variant: string;
}

const initialValue: AlertContext = {
  variant: 'edge-100',
};

export const AlertContext = createContext(initialValue);
