import { useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { ArtistAlbumsItems } from "@/types/artist";

type Props = {
  artistAlbums: ArtistAlbumsItems[];
};

export const ArtistAlbums: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const { artistAlbums } = props;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        アルバム
      </Typography>
      <Typography>クリックでアルバム詳細ページに遷移します</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper", p: 0, mt: 2 }} component="ul">
        {artistAlbums.map((album) => (
          <ListItem key={album.id} component="li" disablePadding>
            <ListItemButton onClick={() => navigate(`/album/${album.id}`)}>
              <Stack spacing={2} direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                <Box sx={{ textAlign: "center", minWidth: "64px" }}>
                  <img src={album.images[0].url} alt="" style={{ width: "64px", height: "64px" }} />
                </Box>
                <Stack sx={{ flexGrow: 1, textAlign: "left" }}>
                  <Typography variant="body1">{album.name}</Typography>
                </Stack>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
