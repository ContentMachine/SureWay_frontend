const LOCAL_BACKEND_URL = process?.env?.NEXT_PUBLIC_DEV_BACKEND_API_URL;
const PRODUCTION_BACKEND_URL = process?.env?.NEXT_PUBLIC_PRODUCTION_BACKEND_URL;

export const BASE_API_URL =
  process?.env?.NODE_ENV === "development"
    ? LOCAL_BACKEND_URL
    : PRODUCTION_BACKEND_URL;