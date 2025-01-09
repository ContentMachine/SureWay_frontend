"use client";

import { modalGenericType } from "@/utilities/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type AppContextTypes = {
  modals: modalGenericType;
  setModals: Dispatch<SetStateAction<modalGenericType>>;
};

type AppContextProviderTypes = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextTypes);

const AppCOntextProvider = ({ children }: AppContextProviderTypes) => {
  // States
  const [modals, setModals] = useState<modalGenericType>({
    cart: false,
    enquiry: false,
  });

  return (
    <AppContext.Provider value={{ modals, setModals }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppCOntextProvider;
