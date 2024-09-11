import { queryOptions, useQuery, QueryOptions, QueryKey, UseQueryResult } from "@tanstack/react-query";

import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { TrackAudioFeaturesResponse } from "@/types/trackAuditFeatures";
import { AxiosRequestConfig } from "axios";

export const getTrackAudioFeatures = async (trackId = ""): Promise<TrackAudioFeaturesResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await api.get<TrackAudioFeaturesResponse>(`/v1/audio-features/${trackId}`, config);

  return data;
};

export const getTrackAudioFeaturesOptions = (
  trackId: string
): QueryOptions<TrackAudioFeaturesResponse, Error, TrackAudioFeaturesResponse, QueryKey> => {
  return queryOptions({
    queryKey: ["trackAudioFeatures", trackId] as QueryKey,
    queryFn: () => getTrackAudioFeatures(trackId),
  });
};

type UseTrackOptions = {
  trackId: string;
  queryConfig?: QueryConfig<typeof getTrackAudioFeaturesOptions>;
};

export const useTrackAudioFeatures = ({ trackId, queryConfig }: UseTrackOptions): UseQueryResult<TrackAudioFeaturesResponse, Error> => {
  const queryOptions = getTrackAudioFeaturesOptions(trackId);
  return useQuery({
    ...queryOptions,
    ...queryConfig,
    queryKey: queryOptions.queryKey as QueryKey,
  });
};
