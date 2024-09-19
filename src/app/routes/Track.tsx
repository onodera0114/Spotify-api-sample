import { FetchQueryOptions, QueryClient, QueryKey } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { useParams, LoaderFunctionArgs } from "react-router-dom";
import { Box } from "@mui/material";

import { getTrackQueryOptions, useTrack } from "@/features/track/api/getTrack";
import { TrackResponse } from "@/types/track";
import { getTrackAudioFeaturesOptions, useTrackAudioFeatures } from "@/features/track/api/getTrackAudioFeatures";
import { TrackInfomation } from "@/features/track/components/TrackInfomation";
import { Loading } from "@/components/layouts/Loading";
import { FeaturesInfomation } from "@/features/track/components/FeaturesInfomation";

export const trackLoader =
  (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs): Promise<TrackResponse | unknown> => {
      const trackId = params.trackId as string;

      const trackQuery = getTrackQueryOptions(trackId);
      const trackAudioFeaturesQuery = getTrackAudioFeaturesOptions(trackId);

      const promises = [
        queryClient.getQueryData(trackQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(trackQuery as FetchQueryOptions)),
        queryClient.getQueryData(trackAudioFeaturesQuery.queryKey as QueryKey) ??
        (await queryClient.fetchQuery(trackAudioFeaturesQuery as FetchQueryOptions)),
      ] as const;

      const [track, trackAudioFeatures] = await Promise.all(promises);

      return {
        track,
        trackAudioFeatures,
      };
    };

export const Track = (): JSX.Element | null => {
  const params = useParams();
  const trackId = params.trackId as string;
  const trackQuery = useTrack({
    trackId,
  });
  const trackAudioFeaturesQuery = useTrackAudioFeatures({
    trackId,
  });

  if (trackQuery.isLoading && trackAudioFeaturesQuery.isLoading) {
    return <Loading />;
  }

  const track = trackQuery.data;
  const audioFeatures = trackAudioFeaturesQuery.data;

  if (!track || !audioFeatures) return null;

  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Failed to load comments. Try to refresh the page.</div>}>
          <h3>曲詳細</h3>
          <Box>
            <TrackInfomation track={track} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <FeaturesInfomation features={audioFeatures} />
          </Box>
        </ErrorBoundary>
      </div>
    </>
  );
};
