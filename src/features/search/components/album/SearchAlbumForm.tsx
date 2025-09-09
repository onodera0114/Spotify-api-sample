import { Input } from "@/components/ui/forms/Input";
import { Stack } from "@mui/material";

type Props = {
  updateAlbumName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateArtistName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchAlbumForm: React.FC<Props> = (props: Props): JSX.Element => {
  const { updateAlbumName, updateArtistName } = props;
  return (
    <>
      <Stack spacing={2}>
        <Input id="track" label="アルバム名" variant="outlined" onChange={updateAlbumName} />
        <Input id="artist" label="アーティスト名" variant="outlined" onChange={updateArtistName} />
      </Stack>
    </>
  );
};
