import { useToast } from "../context/ToastContext";
import { useRouter } from "next/navigation";

const useError = () => {
  // Context
  const { showToast } = useToast();

  // Router
  const router = useRouter();

  // Utils
  const errorFlowFunction = (err: any) => {
    showToast(
      err?.response?.data?.message ||
        err?.response?.data?.description ||
        err?.response,
      "error"
    );
  };

  return { errorFlowFunction };
};

export default useError;
