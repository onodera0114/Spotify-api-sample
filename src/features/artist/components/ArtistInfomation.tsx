import { Button } from "@/components/ui/buttons/Button";
import { DefinitionList, ListItems } from "@/components/ui/lists/DefinitionList";
import { artistKeyList } from "@/config/keyList";
import { Link } from "@/components/ui/links/Link";
import { Stack, Typography } from "@mui/material";
import { ArtistResponse } from "@/types/artist";

type Props = {
  artist: ArtistResponse;
};

export const ArtistInfomation: React.FC<Props> = (props: Props): JSX.Element => {
  const { artist } = props;

  const createListData = (artist: ArtistResponse): ListItems[] => {
    const listItems: ListItems[] = [];

    artistKeyList.forEach((item) => {
      switch (item.key) {
      case "name":
        if (artist.name) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: (
              <Link to={artist.external_urls.spotify} target="_blank" rel="noreferrer" sx={{ width: "fit-content" }}>
                {artist.name}
              </Link>
            ),
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "genres":
        if (artist.genres.length) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: artist.genres.join(", ") ?? "",
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "followers":
        if (artist.followers.total) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: artist.followers.total ?? "",
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      default:
        listItems.push({
          key: item.key,
          teamText: item.teamText,
          descriptionText: artist[item.key as keyof ArtistResponse]!.toString(),
          noteTitle: item.noteTitle ?? "",
          noteText: item.noteText ?? "",
        });
        break;
      }
    });
    return listItems;
  };

  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <img src={artist.images[0].url} alt="" style={{ width: "320px", height: "320px" }} />
        </div>
        <Stack spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            {artist.name}
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
            {artist.uri && (
              <Link to={artist.uri}>
                <Button buttonProps={{ variant: "contained" }}>アプリで開く</Button>
              </Link>
            )}
            {artist.external_urls.spotify && (
              <Link to={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                <Button buttonProps={{ variant: "outlined" }}>ブラウザで開く</Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
      <DefinitionList listItems={createListData(artist)} />
    </>
  );
};
