import { TrackResponse } from "@/types/track";
import { convertMs } from "@/utils/convertMs";
import { Box, List, ListItem, ListItemButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  trackResult: TrackResponse[];
};

export const SearchTrackResult: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { trackResult } = props;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", p: 0 }} component="ul">
      {trackResult.map((track) => (
        <ListItem key={track.id} component="li" disablePadding>
          <ListItemButton onClick={() => navigate(`/track/${track.id}`)}>
            <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
              <Box style={{ textAlign: "center", minWidth: "64px" }}>
                <img src={track.album.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
              </Box>
              <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                <Typography variant="body1">{track.name}</Typography>
                <Typography variant="body2">{track.artists.map((artist) => artist.name).join(", ")}</Typography>
              </Stack>
              {matches && <Typography>{`${convertMs(track.duration_ms).minutes}分${convertMs(track.duration_ms).seconds}秒`}</Typography>}
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
