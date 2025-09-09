import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { debounce } from "lodash";
import { SearchAlbumForm } from "@/features/search/components/album/SearchAlbumForm";
import { SearchAlbumResult } from "@/features/search/components/album/SearchAlbumResult";
import { useSearchCatalog } from "@/features/search/api/searchCatalog";
import { useIntersection } from "@/hooks/useIntersection";
import { Loading } from "@/components/layouts/Loading";

const options = {
  rootMargin: "0px",
};

export const SearchAlbum = (): JSX.Element | null => {
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const searchQuery = useMemo(() => {
    const query: string[] = [];
    if (albumName) {
      query.push(`album:${albumName}`);
    }
    if (artistName) {
      query.push(`artist:${artistName}`);
    }

    return query.join(" ");
  }, [albumName, artistName]);

  const searchCatalogQuery = useSearchCatalog({
    query: searchQuery,
    type: "album",
  });
  const [isIntersecting, ref] = useIntersection(options);
  const searchResult = searchCatalogQuery.data;

  const debouncedUpdateAlbumName = useCallback(
    debounce((value: string) => setAlbumName(value), 500),
    []
  );

  const debouncedUpdateArtistName = useCallback(
    debounce((value: string) => setArtistName(value), 500),
    []
  );

  const updateAlbumName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    debouncedUpdateAlbumName(e.target.value);
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
        アルバム検索
      </Typography>
      <Typography sx={{ mb: 4 }}>最大50件まで表示されます。</Typography>
      <SearchAlbumForm updateAlbumName={updateAlbumName} updateArtistName={updateArtistName} />
      <Box sx={{ mt: 4 }}>
        {searchResult?.pages.map((data, index) => (
          <Fragment key={index}>
            <SearchAlbumResult key={index} albumResult={data.albums?.items ?? []} />
            <div ref={ref}></div>
          </Fragment>
        ))}
      </Box>
      {searchCatalogQuery.isLoading && <Loading />}
    </>
  );
};
