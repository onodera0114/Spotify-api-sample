import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { RelatedArtistsResponse } from "@/types/artist";

export const getRelatedArtists = async (artistId = ""): Promise<RelatedArtistsResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<RelatedArtistsResponse>(`/v1/artists/${artistId}/related-artists`, config);

  return data;
};

export const getRelatedArtistsQueryOptions = (artistId: string): QueryOptions<RelatedArtistsResponse, Error, RelatedArtistsResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["relatedArtists", artistId] as QueryKey,
    queryFn: () => getRelatedArtists(artistId),
  });
};

type UseRelatedArtistsOptions = {
  artistId: string;
  queryConfig?: QueryConfig<typeof getRelatedArtistsQueryOptions>;
};

export const useRelatedArtists = ({ artistId, queryConfig }: UseRelatedArtistsOptions): UseQueryResult<RelatedArtistsResponse, Error> => {
  const queryOptions = getRelatedArtistsQueryOptions(artistId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
