import useSWR, { SWRConfiguration } from "swr";

const useGetHook = (url: string | null, props?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating } = useSWR(url, { ...props });

  console.log(data, isLoading);

  return { data, error, isLoading, isValidating };
};

export default useGetHook;
