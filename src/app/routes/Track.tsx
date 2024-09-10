import { FetchQueryOptions, QueryClient, QueryKey } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { useParams, LoaderFunctionArgs } from "react-router-dom";

import { getTrackQueryOptions, useTrack } from "@/features/track/api/getTrack";
import { TrackResponse } from "@/types/track";

export const trackLoader =
  (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs): Promise<TrackResponse | unknown> => {
      const trackId = params.trackId as string;

      const trackQuery = getTrackQueryOptions(trackId);

      return queryClient.getQueryData(trackQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(trackQuery as FetchQueryOptions));
    };

export const Track = (): JSX.Element | null => {
  const params = useParams();
  const trackId = params.trackId as string;
  const trackQuery = useTrack({
    trackId,
  });

  if (trackQuery.isLoading) {
    return (
      <div>
        <p>ローディング</p>
      </div>
    );
  }

  const track = trackQuery.data;

  if (!track) return null;

  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Failed to load comments. Try to refresh the page.</div>}>
          <div>曲詳細</div>
          <div>{JSON.stringify(track)}</div>
        </ErrorBoundary>
      </div>
    </>
  );
};
