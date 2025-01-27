"use client";

import { createContext, RefObject, useRef } from "react";

type AppContextValues = {
  containerRef: RefObject<HTMLDivElement | null>;
};

type AppContextProviderTypes = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderTypes) => {
  // Ref
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider value={{ containerRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
