import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { TrackResponse } from "@/types/track";

type Props = {
  albumTracks: TrackResponse[];
};

export const AlbumTracks: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const { albumTracks } = props;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        収録曲一覧
      </Typography>
      <Typography>クリックで詳細ページに遷移します</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper", p: 0, mt: 2 }} component="ul">
        {albumTracks.map((track) => (
          <ListItem key={track.id} component="li" disablePadding>
            <ListItemButton onClick={() => navigate(`/track/${track.id}`)}>
              <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                <Stack>
                  <Typography variant="body1">{track.track_number}</Typography>
                </Stack>
                <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                  <Typography variant="body1">{track.name}</Typography>
                </Stack>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
