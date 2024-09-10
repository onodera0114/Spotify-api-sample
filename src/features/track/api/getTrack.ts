import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";

import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { TrackResponse } from "@/types/track";
import { AxiosRequestConfig } from "axios";

export const getTrack = async (trackId = ""): Promise<TrackResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<TrackResponse>(`/v1/tracks/${trackId}`, config);

  return data;
};

export const getTrackQueryOptions = (trackId: string): QueryOptions<TrackResponse, Error, TrackResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["track", trackId] as QueryKey,
    queryFn: () => getTrack(trackId),
  });
};

type UseTrackOptions = {
  trackId: string;
  queryConfig?: QueryConfig<typeof getTrackQueryOptions>;
};

export const useTrack = ({ trackId, queryConfig }: UseTrackOptions): UseQueryResult<TrackResponse, Error> => {
  const queryOptions = getTrackQueryOptions(trackId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
