import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { debounce } from "lodash";
import { SearchTrackForm } from "@/features/search/components/track/SearchTrackForm";
import { SearchTrackResult } from "@/features/search/components/track/SearchTrackResult";
import { useSearchCatalog } from "@/features/search/api/searchCatalog";
import { useIntersection } from "@/hooks/useIntersection";
import { Loading } from "@/components/layouts/Loading";

const options = {
  rootMargin: "0px",
};

export const SearchTrack = (): JSX.Element | null => {
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const searchQuery = useMemo(() => {
    const query: string[] = [];
    if (trackName) {
      query.push(`track:${trackName}`);
    }
    if (artistName) {
      query.push(`artist:${artistName}`);
    }

    return query.join(" ");
  }, [trackName, artistName]);

  const searchCatalogQuery = useSearchCatalog({
    query: searchQuery,
    type: "track",
  });
  const [isIntersecting, ref] = useIntersection(options);
  const searchResult = searchCatalogQuery.data;

  const debouncedUpdateTrackName = useCallback(
    debounce((value: string) => setTrackName(value), 500),
    []
  );

  const debouncedUpdateArtistName = useCallback(
    debounce((value: string) => setArtistName(value), 500),
    []
  );

  const updateTrackName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    debouncedUpdateTrackName(e.target.value);
  };

  const updateArtistName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    debouncedUpdateArtistName(e.target.value);
  };

  useEffect(() => {
    if (isIntersecting && searchCatalogQuery.hasNextPage) {
      searchCatalogQuery.fetchNextPage();
    }
  }, [isIntersecting]);

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", flexGrow: 1, mt: 2 }}>
        曲検索
      </Typography>
      <Typography sx={{ mb: 4 }}>最大50件まで表示されます。</Typography>
      <SearchTrackForm updateTrackName={updateTrackName} updateArtistName={updateArtistName} />
      <>
        {searchResult?.pages.map(
          (data, index) =>
            searchResult?.pages.length - 1 === index && (
              <Fragment key={index}>
                <SearchTrackResult key={index} trackResult={data.tracks?.items ?? []} />
                <div ref={ref}></div>
              </Fragment>
            )
        )}
      </>
      {searchCatalogQuery.isLoading && <Loading />}
    </>
  );
};
