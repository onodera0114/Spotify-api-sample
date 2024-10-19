import { Typography } from "@mui/material";
import { SearchTrackForm } from "@/features/search/components/track/SearchTrackForm";
import { SearchTrackResult } from "@/features/search/components/track/SearchTrackResult";

export const SearchTrack = (): JSX.Element => {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", flexGrow: 1, my: 2 }}>
        曲検索
      </Typography>
      <SearchTrackForm />
      <SearchTrackResult trackResult={[]} />
    </>
  );
};
