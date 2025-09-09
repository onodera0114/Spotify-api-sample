import { useEffect, Fragment } from "react";
import { FetchQueryOptions, QueryClient, QueryKey } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { useParams, LoaderFunctionArgs } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Loading } from "@/components/layouts/Loading";
import { AlbumInfomation } from "@/features/album/components/AlbumInfomation";
import { getAlbumQueryOptions, useAlbum } from "@/features/album/api/getAlbum";
import { getAlbumTracksQueryOptions, useAlbumTracks } from "@/features/album/api/getAlbumTracks";
import { useIntersection } from "@/hooks/useIntersection";
import { AlbumTracks } from "@/features/album/components/AlbumTracksInformation";

const options = {
  rootMargin: "0px",
};

export const albumLoader =
  (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs): Promise<unknown> => {
      const albumId = params.albumId as string;

      const albumQuery = getAlbumQueryOptions(albumId);
      const albumTracksQuery = getAlbumTracksQueryOptions(albumId);

      const promises = [
        queryClient.getQueryData(albumQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(albumQuery as FetchQueryOptions)),
        queryClient.getQueryData(albumTracksQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(albumTracksQuery as FetchQueryOptions)),
      ] as const;

      const [album, albumTracks] = await Promise.all(promises);

      return {
        album,
        albumTracks,
      };
    };

export const Album = (): JSX.Element | null => {
  const params = useParams();
  const albumId = params.albumId as string;
  const albumQuery = useAlbum({
    albumId,
  });
  const albumTracksQuery = useAlbumTracks({
    albumId,
  });
  const [isIntersecting, ref] = useIntersection(options);

  const album = albumQuery.data;
  const albumTracks = albumTracksQuery.data;

  useEffect(() => {
    if (isIntersecting && albumTracksQuery.hasNextPage) {
      albumTracksQuery.fetchNextPage();
    }
  }, [isIntersecting]);

  if (!album || !albumTracks) return null;

  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Failed to load comments. Try to refresh the page.</div>}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", flexGrow: 1, my: 2 }}>
            アルバム詳細
          </Typography>
          <Box>
            <AlbumInfomation album={album} />
          </Box>
          <Box sx={{ mt: 6 }}>
            {albumTracks?.pages.map((data, index) => (
              <Fragment key={index}>
                <AlbumTracks albumTracks={data.items ?? []} />
                <div ref={ref}></div>
              </Fragment>
            ))}
          </Box>
          {albumTracksQuery.isLoading && <Loading />}
        </ErrorBoundary>
      </div>
    </>
  );
};
