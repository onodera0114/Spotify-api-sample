import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { debounce } from "lodash";
import { SearchArtistForm } from "@/features/search/components/artist/SearchArtistForm";
import { SearchArtistResult } from "@/features/search/components/artist/SearchArtistResult";
import { useSearchCatalog } from "@/features/search/api/searchCatalog";
import { useIntersection } from "@/hooks/useIntersection";
import { Loading } from "@/components/layouts/Loading";

const options = {
  rootMargin: "0px",
};

export const SearchArtist = (): JSX.Element | null => {
  const [artistName, setArtistName] = useState("");
  const searchQuery = useMemo(() => {
    const query: string[] = [];
    if (artistName) {
      query.push(`artist:${artistName}`);
    }

    return query.join(" ");
  }, [artistName]);

  const searchCatalogQuery = useSearchCatalog({
    query: searchQuery,
    type: "artist",
  });
  const [isIntersecting, ref] = useIntersection(options);
  const searchResult = searchCatalogQuery.data;

  const debouncedUpdateArtistName = useCallback(
    debounce((value: string) => setArtistName(value), 500),
    []
  );

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
        アーティスト検索
      </Typography>
      <Typography sx={{ mb: 4 }}>最大50件まで表示されます。</Typography>
      <SearchArtistForm updateArtistName={updateArtistName} />
      <Box sx={{ mt: 4 }}>
        {searchResult?.pages.map((data, index) => (
          <Fragment key={index}>
            <SearchArtistResult key={index} artistResult={data.artists?.items ?? []} />
            <div ref={ref}></div>
          </Fragment>
        ))}
      </Box>
      {searchCatalogQuery.isLoading && <Loading />}
    </>
  );
};
