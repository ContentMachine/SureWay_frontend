import { BASE_API_URL } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((axiosConfig) => {
  if (!navigator.onLine) {
    throw new Error("Please chech your internet connection");
  }

  return axiosConfig;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return response;
    } else {
      throw new Error(response?.data?.error?.message);
    }
  },
  async (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
