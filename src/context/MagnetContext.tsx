"use client";

import { useMagnetSizes } from "@/hooks/useMagnets";
import React, { useMemo } from "react";
import { createContext } from "react";

type MagnetContextValuesTypes = {
  magnetSizes: string[];
  magnetSizesIsLoading: boolean;
};

type MagnegContextProviderTypes = {
  children: React.ReactNode;
};

export const MagnetContext = createContext({} as MagnetContextValuesTypes);

const MagnetContextProvider = ({ children }: MagnegContextProviderTypes) => {
  // Requests
  const { data: magnetSizesData, isLoading: magnetSizesIsLoading } =
    useMagnetSizes();

  // Memo
  const magnetSizes = useMemo(() => magnetSizesData?.data, [magnetSizesData]);

  return (
    <MagnetContext.Provider value={{ magnetSizes, magnetSizesIsLoading }}>
      {children}
    </MagnetContext.Provider>
  );
};

export default MagnetContextProvider;
