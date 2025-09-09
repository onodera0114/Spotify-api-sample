import { FetchQueryOptions, QueryClient, QueryKey } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { useParams, LoaderFunctionArgs } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Loading } from "@/components/layouts/Loading";
import { AlbumInfomation } from "@/features/album/components/AlbumInfomation";
import { getAlbumQueryOptions, useAlbum } from "@/features/album/api/getAlbum";

export const albumLoader =
  (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs): Promise<unknown> => {
      const albumId = params.albumId as string;

      const albumQuery = getAlbumQueryOptions(albumId);

      const promises = [
        queryClient.getQueryData(albumQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(albumQuery as FetchQueryOptions)),
      ] as const;

      const [album] = await Promise.all(promises);

      return {
        album,
      };
    };

export const Album = (): JSX.Element | null => {
  const params = useParams();
  const albumId = params.albumId as string;
  const albumQuery = useAlbum({
    albumId,
  });

  if (albumQuery.isLoading) {
    return <Loading />;
  }

  const album = albumQuery.data;

  if (!album) return null;

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
        </ErrorBoundary>
      </div>
    </>
  );
};
