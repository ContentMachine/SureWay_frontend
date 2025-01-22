"use client";

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
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(searchParams.toString());

      if (method === "get") {
        return params.get(key);
      }

      if (method === "delete") {
        params.delete(key);
      } else if (value) {
        params.set(key, value);
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  return updateSearchParams;
};

export default useUpdateSearchParams;
