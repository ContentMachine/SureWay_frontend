import { useToast } from "../context/ToastContext";

const useError = () => {
  // Context
  const { showToast } = useToast();

  // Utils
  const errorFlowFunction = (err: any) => {
    showToast(
      err?.response?.data?.message ||
        err?.response?.data ||
        err?.response ||
        "An error occured, please try again in few minutes",
      "error"
    );
  };

  return { errorFlowFunction };
};

export default useError;
