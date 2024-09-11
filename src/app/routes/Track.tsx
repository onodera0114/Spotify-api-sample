import { FetchQueryOptions, QueryClient, QueryKey } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { useParams, LoaderFunctionArgs } from "react-router-dom";

import { getTrackQueryOptions, useTrack } from "@/features/track/api/getTrack";
import { TrackResponse } from "@/types/track";
import { getTrackAudioFeaturesOptions, useTrackAudioFeatures } from "@/features/track/api/getTrackAudioFeatures";

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
    return (
      <div>
        <p>ローディング</p>
      </div>
    );
  }

  const track = trackQuery.data;
  const audioFeatures = trackAudioFeaturesQuery.data;

  if (!track || !audioFeatures) return null;

  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Failed to load comments. Try to refresh the page.</div>}>
          <div>曲詳細</div>
          <div>{JSON.stringify(track)}</div>
          <div>{JSON.stringify(audioFeatures)}</div>
        </ErrorBoundary>
      </div>
    </>
  );
};
