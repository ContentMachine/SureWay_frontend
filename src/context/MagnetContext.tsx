"use client";

import { useMagnetSizes } from "@/hooks/useMagnets";
import { magnetDataType } from "@/utilities/types";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { createContext } from "react";

type MagnetContextValuesTypes = {
  magnetSizes: string[];
  magnetSizesIsLoading: boolean;
  magnetData: magnetDataType;
  setMagnetData: Dispatch<SetStateAction<magnetDataType>>;
};

type MagnegContextProviderTypes = {
  children: React.ReactNode;
};

export const MagnetContext = createContext({} as MagnetContextValuesTypes);

const MagnetContextProvider = ({ children }: MagnegContextProviderTypes) => {
  // Requests
  const { data: magnetSizesData, isLoading: magnetSizesIsLoading } =
    useMagnetSizes();

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

  // Memo
  const magnetSizes = useMemo(() => magnetSizesData?.data, [magnetSizesData]);

  return (
    <MagnetContext.Provider
      value={{
        magnetSizes,
        magnetSizesIsLoading,
        magnetData,
        setMagnetData,
      }}
    >
      {children}
    </MagnetContext.Provider>
  );
};

export default MagnetContextProvider;
