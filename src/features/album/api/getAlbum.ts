import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";

import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { AxiosRequestConfig } from "axios";
import { AlbumResponse } from "@/types/album";

export const getAlbum = async (albumId = ""): Promise<AlbumResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<AlbumResponse>(`/v1/albums/${albumId}`, config);

  return data;
};

export const getAlbumQueryOptions = (albumId: string): QueryOptions<AlbumResponse, Error, AlbumResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["album", albumId] as QueryKey,
    queryFn: () => getAlbum(albumId),
  });
};

type UseAlbumOptions = {
  albumId: string;
  queryConfig?: QueryConfig<typeof getAlbumQueryOptions>;
};

export const useAlbum = ({ albumId, queryConfig }: UseAlbumOptions): UseQueryResult<AlbumResponse, Error> => {
  const queryOptions = getAlbumQueryOptions(albumId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
