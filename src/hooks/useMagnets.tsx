import { SWRConfiguration } from "swr";
import useGetHook from "./useGetHook";

export const swrConfigs: SWRConfiguration = {
  revalidateOnFocus: false,
};

export const useMagnetPriceByQuantity = (price: string, quantity: number) => {
  const url =
    price && quantity
      ? `/api/magnets/price/by-quantity/${price}/${quantity}`
      : null;

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

export const useShapesByType = (type: string) => {
  const url = type ? `/api/magnets/size/by-type/${type}` : null;

  return useGetHook(url, swrConfigs);
};

export const useDimensionsByTypeAndShape = (type: string, shape: string) => {
  const url =
    type && shape ? `/api/magnets/size/by-type/${type}/${shape}` : null;

  return useGetHook(url, swrConfigs);
};

export const usePriceByTypeShapeAndDimension = (
  type: string,
  shape: string,
  dimension: string
) => {
  const url =
    type && shape && dimension
      ? `/api/magnets/size/by-type/${type}/${shape}/${dimension}`
      : null;

  return useGetHook(url, swrConfigs);
};
