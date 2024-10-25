import { FetchQueryOptions, QueryClient, QueryKey } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { useParams, LoaderFunctionArgs } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Loading } from "@/components/layouts/Loading";
import { getArtistQueryOptions, useArtist } from "@/features/artist/api/getArtist";
import { getArtistAlbumsQueryOptions, useArtistAlbums } from "@/features/artist/api/getArtistAlbums";
import { getArtistTopTracksQueryOptions, useArtistTopTracks } from "@/features/artist/api/getArtistTopTracks";
import { getRelatedArtistsQueryOptions, useRelatedArtists } from "@/features/artist/api/getRelatedArtistsResponse";
import { ArtistInfomation } from "@/features/artist/components/ArtistInfomation";
import { ArtistTopTracks } from "@/features/artist/components/ArtistTopTracks";
import { RelatedArtists } from "@/features/artist/components/RelatedArtists";
import { ArtistAlbums } from "@/features/artist/components/ArtistAlbums";

export const artistLoader =
  (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs): Promise<unknown> => {
      const artistId = params.artistId as string;

      const artistQuery = getArtistQueryOptions(artistId);
      const artistAlbumsQuery = getArtistAlbumsQueryOptions(artistId);
      const artistTopTracksQuery = getArtistTopTracksQueryOptions(artistId);
      const relatedArtistsQuery = getRelatedArtistsQueryOptions(artistId);

      const promises = [
        queryClient.getQueryData(artistQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(artistQuery as FetchQueryOptions)),
        queryClient.getQueryData(artistAlbumsQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(artistAlbumsQuery as FetchQueryOptions)),
        queryClient.getQueryData(artistTopTracksQuery.queryKey as QueryKey) ??
        (await queryClient.fetchQuery(artistTopTracksQuery as FetchQueryOptions)),
        queryClient.getQueryData(relatedArtistsQuery.queryKey as QueryKey) ?? (await queryClient.fetchQuery(relatedArtistsQuery as FetchQueryOptions)),
      ] as const;

      const [artist, artistAlbums, artistTopTracks, relatedArtists] = await Promise.all(promises);

      return {
        artist,
        artistAlbums,
        artistTopTracks,
        relatedArtists,
      };
    };

export const Artist = (): JSX.Element | null => {
  const params = useParams();
  const artistId = params.artistId as string;
  const artistQuery = useArtist({
    artistId,
  });
  const artistAlbumsQuery = useArtistAlbums({
    artistId,
  });
  const artistTopTracksQuery = useArtistTopTracks({
    artistId,
  });
  const relatedArtistsQuery = useRelatedArtists({
    artistId,
  });

  if (artistQuery.isLoading || artistAlbumsQuery.isLoading || artistTopTracksQuery.isLoading || relatedArtistsQuery.isLoading) {
    return <Loading />;
  }

  const artist = artistQuery.data;
  const artistAlbums = artistAlbumsQuery.data;
  const artistTopTracks = artistTopTracksQuery.data;
  const relatedArtists = relatedArtistsQuery.data;

  if (!artist || !artistAlbums || !artistTopTracks || !relatedArtists) return null;

  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Failed to load comments. Try to refresh the page.</div>}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", flexGrow: 1, my: 2 }}>
            アーティスト詳細
          </Typography>
          <Box>
            <ArtistInfomation artist={artist} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <ArtistAlbums artistAlbums={artistAlbums.items} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <ArtistTopTracks artistTopTracks={artistTopTracks.tracks} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <RelatedArtists relatedArtists={relatedArtists.artists} />
          </Box>
        </ErrorBoundary>
      </div>
    </>
  );
};
