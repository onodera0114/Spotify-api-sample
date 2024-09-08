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
    return response.data;
  },
  (error) => {
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
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
