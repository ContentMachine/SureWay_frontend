import useGetHook from "./useGetHook";
import { swrConfigs } from "./useMagnets";

export const useEngravingCategories = () => {
  const url = "api/engravings/categories";

  return useGetHook(url, swrConfigs);
};
