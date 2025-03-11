import { Input } from "@/components/ui/forms/Input";
import { Stack } from "@mui/material";

type Props = {
  updateTrackName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateArtistName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchTrackForm: React.FC<Props> = (props: Props): JSX.Element => {
  const { updateTrackName, updateArtistName } = props;
  return (
    <>
      <Stack spacing={2}>
        <Input id="track" label="曲名" variant="outlined" onChange={updateTrackName} />
        <Input id="artist" label="アーティスト名" variant="outlined" onChange={updateArtistName} />
      </Stack>
    </>
  );
};
