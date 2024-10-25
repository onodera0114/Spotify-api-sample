import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { ArtistTopTracksResponse } from "@/types/artist";

export const getArtistTopTracks = async (artistId = ""): Promise<ArtistTopTracksResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<ArtistTopTracksResponse>(`/v1/artists/${artistId}/top-tracks?market=JP`, config);

  return data;
};

export const getArtistTopTracksQueryOptions = (artistId: string): QueryOptions<ArtistTopTracksResponse, Error, ArtistTopTracksResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["artistTopTracks", artistId] as QueryKey,
    queryFn: () => getArtistTopTracks(artistId),
  });
};

type UseArtistTopTracksOptions = {
  artistId: string;
  queryConfig?: QueryConfig<typeof getArtistTopTracksQueryOptions>;
};

export const useArtistTopTracks = ({ artistId, queryConfig }: UseArtistTopTracksOptions): UseQueryResult<ArtistTopTracksResponse, Error> => {
  const queryOptions = getArtistTopTracksQueryOptions(artistId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
