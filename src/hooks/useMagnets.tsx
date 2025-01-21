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

export const useMagnets = (type?: string) => {
  const url = type ? `/api/magnets/type/all` : `/api/magnets/type/${type}`;

  return useGetHook(url, swrConfigs);
};
