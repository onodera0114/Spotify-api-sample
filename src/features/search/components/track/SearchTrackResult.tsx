import { TrackResponse } from "@/types/track";
import { convertMs } from "@/utils/convertMs";
import { Box, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";

type Props = {
  trackResult: TrackResponse[];
};

export const SearchTrackResult: React.FC<Props> = (props: Props): JSX.Element => {
  const { trackResult } = props;
  return (
    <Box sx={{ mt: 4 }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }} component="ul">
        {trackResult.map((track) => (
          <ListItem key={track.id} disablePadding>
            <ListItemButton>
              <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <img src={track.album.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
                </div>
                <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                  <Typography>{track.name}</Typography>
                  <Typography>{track.artists.map((artist) => artist.name).join(", ")}</Typography>
                </Stack>
                <Typography>{`${convertMs(track.duration_ms).minutes}分${convertMs(track.duration_ms).seconds}秒`}</Typography>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
