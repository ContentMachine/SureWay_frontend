import { useSearchParams, usePathname, useRouter } from "next/navigation";

const useUpdateSearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateSearchParams = (
    key: string,
    value: string | undefined,
    method: "set" | "delete" | "get"
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (method === "get") {
      return params.get(key); // Simply return the value of the key
    }

    if (method === "delete") {
      params.delete(key); // Delete the key from search params
    } else if (value) {
      params.set(key, value); // Add or update the key-value pair
    }

    // Push the new URL with updated search params
    router.push(`${pathname}?${params.toString()}`);
  };

  return updateSearchParams;
};

export default useUpdateSearchParams;
