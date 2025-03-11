import { ArtistResponse } from "@/types/artist";
import { Box, List, ListItem, ListItemButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  artistResult: ArtistResponse[];
};

export const SearchArtistResult: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { artistResult } = props;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", p: 0 }} component="ul">
      {artistResult.map((artist) => (
        <ListItem key={artist.id} component="li" disablePadding>
          <ListItemButton onClick={() => navigate(`/artist/${artist.id}`)}>
            <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
              <Box style={{ textAlign: "center", minWidth: "64px" }}>
                {artist.images.length > 0 ? (
                  <img src={artist.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
                ) : (
                  <Box style={{ width: "64px", height: "64px" }}></Box>
                )}
              </Box>
              <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                <Typography variant="body1">{artist.name}</Typography>
              </Stack>
              {matches && (
                <Stack sx={{ textAlign: "center" }}>
                  <Typography variant="body2">フォロワー数</Typography>
                  <Typography variant="body2">{artist.followers.total}</Typography>
                </Stack>
              )}
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
