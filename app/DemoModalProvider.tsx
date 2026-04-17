"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface DemoModalCtx { isOpen: boolean; open: () => void; close: () => void; }
const Ctx = createContext<DemoModalCtx>({ isOpen: false, open: () => {}, close: () => {} });

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Ctx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useBookDemo = () => useContext(Ctx);
