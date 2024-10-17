import { Input } from "@/components/ui/forms/Input";

export const SearchTrackForm = (): JSX.Element => {
  return (
    <>
      <Input label="曲名" variant="outlined" />
      <Input label="アーティスト名" variant="outlined" />
    </>
  );
};
