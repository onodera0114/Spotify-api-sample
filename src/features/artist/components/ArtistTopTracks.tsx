import { useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { TrackResponse } from "@/types/track";

type Props = {
  artistTopTracks: TrackResponse[];
};

export const ArtistTopTracks: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const { artistTopTracks } = props;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        人気曲
      </Typography>
      <Typography>クリックで楽曲詳細ページに遷移します</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper", p: 0, mt: 2 }} component="ul">
        {artistTopTracks.map((track) => (
          <ListItem key={track.id} component="li" disablePadding>
            <ListItemButton onClick={() => navigate(`/track/${track.id}`)}>
              <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                <Box sx={{ textAlign: "center", minWidth: "64px" }}>
                  <img src={track.album.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
                </Box>
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
