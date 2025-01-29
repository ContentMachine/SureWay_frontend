"use client";

import { magnetDataType } from "@/utilities/types";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { createContext } from "react";

type MagnetContextValuesTypes = {
  magnetData: magnetDataType;
  setMagnetData: Dispatch<SetStateAction<magnetDataType>>;
};

type MagnegContextProviderTypes = {
  children: React.ReactNode;
};

export const MagnetContext = createContext({} as MagnetContextValuesTypes);

const MagnetContextProvider = ({ children }: MagnegContextProviderTypes) => {
  // States
  const [magnetData, setMagnetData] = useState<magnetDataType>({
    shape: "",
    dimension: "",
    fullName: "",
    email: "",
    phone: "",
    customText: "",
    achievement: "",
    image: null,
  });

  return (
    <MagnetContext.Provider
      value={{
        magnetData,
        setMagnetData,
      }}
    >
      {children}
    </MagnetContext.Provider>
  );
};

export default MagnetContextProvider;
