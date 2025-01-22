import { SWRConfiguration } from "swr";
import useGetHook from "./useGetHook";

export const swrConfigs: SWRConfiguration = {
  revalidateOnFocus: false,
};

export const useMagnetSizes = () => {
  const url = `/api/magnets/size/sizes`;

  return useGetHook(url, swrConfigs);
};

export const useMagnetPrice = (size?: string) => {
  const url = size ? `/api/magnets/size/by-size/${size}` : null;

  return useGetHook(url, swrConfigs);
};

export const useMagnets = (category?: string) => {
  const url = `/api/magnets/category/categories/${category || "all"}`;

  return useGetHook(url, swrConfigs);
};

export const useMagnetCategories = () => {
  const url = `/api/magnets/category/categories`;

  return useGetHook(url, swrConfigs);
};
