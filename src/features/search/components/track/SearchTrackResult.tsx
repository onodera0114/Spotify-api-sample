import { TrackResponse } from "@/types/track";
import { convertMs } from "@/utils/convertMs";
import { Box, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  trackResult: TrackResponse[];
};

export const SearchTrackResult: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const { trackResult } = props;

  return (
    <Box sx={{ mt: 4 }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }} component="ul">
        {trackResult.map((track) => (
          <ListItem key={track.id} component="li" disablePadding>
            <ListItemButton onClick={() => navigate(`/track/${track.id}`)}>
              <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                <Box style={{ textAlign: "center" }}>
                  <img src={track.album.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
                </Box>
                <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                  <Typography variant="body1">{track.name}</Typography>
                  <Typography variant="body2">{track.artists.map((artist) => artist.name).join(", ")}</Typography>
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
