import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { ArtistResponse } from "@/types/artist";

export const getArtist = async (artistId = ""): Promise<ArtistResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<ArtistResponse>(`/v1/artists/${artistId}`, config);

  return data;
};

export const getArtistQueryOptions = (artistId: string): QueryOptions<ArtistResponse, Error, ArtistResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["artist", artistId] as QueryKey,
    queryFn: () => getArtist(artistId),
  });
};

type UseArtistOptions = {
  artistId: string;
  queryConfig?: QueryConfig<typeof getArtistQueryOptions>;
};

export const useArtist = ({ artistId, queryConfig }: UseArtistOptions): UseQueryResult<ArtistResponse, Error> => {
  const queryOptions = getArtistQueryOptions(artistId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
