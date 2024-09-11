import { getAccessToken } from "@/features/token/api/accessToken";
import Axios, { InternalAxiosRequestConfig } from "axios";

const authRequestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

export const authApi = Axios.create({
  baseURL: import.meta.env.VITE_SPTIFY_API_ACCOUNT_BASE_URL,
});

authApi.interceptors.request.use(authRequestInterceptor);
authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};
export const api = Axios.create({
  baseURL: import.meta.env.VITE_SPTIFY_API_BASE_URL,
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const response = await getAccessToken();
        const newToken = response.access_token;
        localStorage.setItem("token", newToken);

        // 新しいトークンをヘッダーに設定して再度リクエストを送る
        error.config.headers["Authorization"] = `Bearer ${newToken}`;
        return await api.request(error.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
