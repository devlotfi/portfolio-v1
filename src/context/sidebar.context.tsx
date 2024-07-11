import { createContext, PropsWithChildren, useState } from "react";

interface SidebarContext {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const initialValue: SidebarContext = {
  open: false,
  setOpen() {},
};

export const SidebarContext = createContext(initialValue);

export function SidebarProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState<boolean>(initialValue.open);

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
