import { engravedProductType } from "@/utilities/types";
import useGetHook from "./useGetHook";
import { swrConfigs } from "./useMagnets";

export const useEngravingCategories = () => {
  const url = "api/engravings/categories";

  return useGetHook(url, swrConfigs);
};

export const useEngravingProducts = (section: engravedProductType) => {
  const url = section ? `/api/engravings/${section}` : null;

  return useGetHook(url, swrConfigs);
};

export const useEngravingProductById = (
  section: engravedProductType,
  id: string
) => {
  const url = section && id ? `/api/engravings/${section}/${id}` : null;

  return useGetHook(url, swrConfigs);
};
