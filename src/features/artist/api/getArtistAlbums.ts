import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { ArtistAlbumsResponse } from "@/types/artist";

export const getArtistAlbums = async (artistId = ""): Promise<ArtistAlbumsResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<ArtistAlbumsResponse>(`/v1/artists/${artistId}/albums`, config);

  return data;
};

export const getArtistAlbumsQueryOptions = (artistId: string): QueryOptions<ArtistAlbumsResponse, Error, ArtistAlbumsResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["artistAlbums", artistId] as QueryKey,
    queryFn: () => getArtistAlbums(artistId),
  });
};

type UseArtistAlbumsOptions = {
  artistId: string;
  queryConfig?: QueryConfig<typeof getArtistAlbumsQueryOptions>;
};

export const useArtistAlbums = ({ artistId, queryConfig }: UseArtistAlbumsOptions): UseQueryResult<ArtistAlbumsResponse, Error> => {
  const queryOptions = getArtistAlbumsQueryOptions(artistId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
