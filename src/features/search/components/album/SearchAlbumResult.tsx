import { Album } from "@/types/album";
import { Box, List, ListItem, ListItemButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  albumResult: Album[];
};

export const SearchAlbumResult: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { albumResult } = props;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", p: 0 }} component="ul">
      {albumResult.map((album) => (
        <ListItem key={album.id} component="li" disablePadding>
          <ListItemButton onClick={() => navigate(`/album/${album.id}`)}>
            <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
              <Box style={{ textAlign: "center", minWidth: "64px" }}>
                {album.images.length > 0 ? (
                  <img src={album.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
                ) : (
                  <Box style={{ width: "64px", height: "64px" }}></Box>
                )}
              </Box>
              <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                <Typography variant="body1">{album.name}</Typography>
                <Typography variant="body2">{album.artists.map((artist) => artist.name).join(", ")}</Typography>
              </Stack>
              {matches && <Typography>{`${album.release_date}`}</Typography>}
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
