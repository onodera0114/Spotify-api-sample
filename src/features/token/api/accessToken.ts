import { authApi } from "@/lib/axios";
import { AccessTokenResponse } from "@/types/accessToken";
import { AxiosRequestConfig } from "axios";

export const getAccessToken = async (): Promise<AccessTokenResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${import.meta.env.VITE_SPTIFY_API_CLIENT_ID}:${import.meta.env.VITE_SPTIFY_API_CLIENT_SECRET}`)}`,
    },
  };
  const { data } = await authApi.post<AccessTokenResponse>(
    "/api/token",
    {
      grant_type: "client_credentials",
    },
    config
  );

  return data;
};
