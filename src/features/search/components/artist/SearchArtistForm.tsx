import { Input } from "@/components/ui/forms/Input";
import { Stack } from "@mui/material";

type Props = {
  updateArtistName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchArtistForm: React.FC<Props> = (props: Props): JSX.Element => {
  const { updateArtistName } = props;
  return (
    <>
      <Stack spacing={2}>
        <Input id="artist" label="アーティスト名" variant="outlined" onChange={updateArtistName} />
      </Stack>
    </>
  );
};
