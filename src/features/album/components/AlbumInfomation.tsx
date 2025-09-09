import { Button } from "@/components/ui/buttons/Button";
import { DefinitionList, ListItems } from "@/components/ui/lists/DefinitionList";
import { albumKeyList } from "@/config/keyList";
import { AlbumResponse } from "@/types/album";
import { Link } from "@/components/ui/links/Link";
import { Stack, Typography } from "@mui/material";

type Props = {
  album: AlbumResponse;
};

export const AlbumInfomation: React.FC<Props> = (props: Props): JSX.Element => {
  const { album } = props;

  const createListData = (album: AlbumResponse): ListItems[] => {
    const listItems: ListItems[] = [];

    albumKeyList.forEach((item) => {
      switch (item.key) {
      case "name":
        if (album.name) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: (
              <Link to={album.external_urls.spotify} target="_blank" rel="noreferrer" sx={{ width: "fit-content" }}>
                {album.name}
              </Link>
            ),
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "release_date":
        if (album.release_date) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: album.release_date,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "album_type":
        if (album.album_type) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: album.album_type,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "artists":
        if (album.artists.length) {
          listItems.push({
            key: "artists",
            teamText: "アーティスト",
            descriptionText: (
              <Stack>
                {album.artists.map((artist) => (
                  <Link key={artist.id} to={artist.external_urls.spotify} target="_blank" rel="noreferrer" sx={{ width: "fit-content" }}>
                    {artist.name}
                  </Link>
                ))}
              </Stack>
            ),
          });
        }
        break;
      case "available_markets":
        listItems.push({
          key: item.key,
          teamText: item.teamText,
          descriptionText: album.available_markets.join(", "),
          noteTitle: item.noteTitle ?? "",
          noteText: (
            <>
              <Link to="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank" rel="noreferrer">
                  ISO 3166-1 alpha-2 code
              </Link>
                で表示しています
            </>
          ),
        });
        break;
      case "isrc":
        if (album.external_ids.isrc) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: album.external_ids.isrc,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "ean":
        if (album.external_ids.ean) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: album.external_ids.ean,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "upc":
        if (album.external_ids.upc) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: album.external_ids.upc,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "copyrights":
        if (album.copyrights.length) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: album.copyrights.map((copyright) => copyright.text).join(", "),
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      default:
        listItems.push({
          key: item.key,
          teamText: item.teamText,
          descriptionText: album[item.key as keyof AlbumResponse]!.toString(),
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
          <img src={album.images[0].url} alt="" style={{ width: "320px", height: "320px" }} />
        </div>
        <Stack spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            {album.name}
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
            {album.uri && (
              <Link to={album.uri}>
                <Button buttonProps={{ variant: "contained" }}>アプリで開く</Button>
              </Link>
            )}
            {album.external_urls.spotify && (
              <Link to={album.external_urls.spotify} target="_blank" rel="noreferrer">
                <Button buttonProps={{ variant: "outlined" }}>ブラウザで開く</Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
      <DefinitionList listItems={createListData(album)} />
    </>
  );
};
