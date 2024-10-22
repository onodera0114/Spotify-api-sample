import { useNavigate } from "react-router-dom";
import { Breakpoint, Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { ArtistResponse } from "@/types/artist";
import { useWidth } from "@/hooks/useWidth";

type Props = {
  relatedArtists: ArtistResponse[];
};

const displayGridItem = (width: Breakpoint, index: number): boolean => {
  switch (width) {
  case "xs":
    return index < 3;
  case "sm":
    return index < 4;
  case "md":
    return index < 6;
  case "lg":
    return index < 8;
  case "xl":
    return index < 12;
  default:
    return index < 3;
  }
};

export const RelatedArtists: React.FC<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const width = useWidth();
  const { relatedArtists } = props;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        関連するアーティスト
      </Typography>
      <Typography>クリックでアーティスト詳細ページに遷移します</Typography>
      <Grid2 container columns={48}>
        {relatedArtists.map(
          (artist, index) =>
            displayGridItem(width, index) && (
              <Grid2 key={artist.id} size={{ xs: 16, sm: 12, md: 8, lg: 6, xl: 4 }}>
                <Card variant="outlined" sx={{ border: "none", height: "100%" }}>
                  <CardActionArea
                    sx={{ height: "100%", display: "flex", justifyContent: artist.images[0] ? "flex-start" : "center", flexDirection: "column" }}
                    onClick={() => navigate(`/artist/${artist.id}`)}
                  >
                    {artist.images[0] && <CardMedia component="img" image={artist.images[0].url} alt="" />}
                    <CardContent sx={{ p: 1 }}>
                      <Typography variant="body2">{artist.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid2>
            )
        )}
      </Grid2>
    </>
  );
};
