import { SearchTrackForm } from "@/features/search/components/track/SearchTrackForm";
import { SearchTrackResult } from "@/features/search/components/track/SearchTrackResult";

export const SearchTrack = (): JSX.Element => {
  return (
    <>
      <h1>曲検索</h1>
      <SearchTrackForm />
      <SearchTrackResult />
    </>
  );
};
