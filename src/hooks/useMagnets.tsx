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

export const useMagnetPriceByQuantity = (size: string, quantity: number) => {
  const url =
    size && quantity ? `/api/magnets/size/by-size/${size}/${quantity}` : null;

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

export const useMagnetTypes = () => {
  const url = `/api/magnets/type/type`;

  return useGetHook(url, swrConfigs);
};

export const useMagnetTypesBySlug = (slug: string) => {
  const url = `/api/magnets/type/type/${slug}`;

  return useGetHook(url, swrConfigs);
};

export const useMagnetSubmission = (id: string) => {
  const url = id ? `/api/magnets/submit-magnet/${id}` : null;

  return useGetHook(url, swrConfigs);
};
