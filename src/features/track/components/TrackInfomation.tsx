import { Button } from "@/components/ui/buttons/Button";
import { DefinitionList, ListItems } from "@/components/ui/lists/DefinitionList";
import { trackKeyList } from "@/config/keyList";
import { TrackResponse } from "@/types/track";
import { convertMs } from "@/utils/convertMs";
import { Link } from "@/components/ui/links/Link";
import { Stack, Typography } from "@mui/material";

type Props = {
  track: TrackResponse;
};

export const TrackInfomation: React.FC<Props> = (props: Props): JSX.Element => {
  const { track } = props;

  const createListData = (track: TrackResponse): ListItems[] => {
    const listItems: ListItems[] = [];

    trackKeyList.forEach((item) => {
      switch (item.key) {
      case "name":
        if (track.name) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: (
              <Link to={track.external_urls.spotify} target="_blank" rel="noreferrer" sx={{ width: "fit-content" }}>
                {track.name}
              </Link>
            ),
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "release_date":
        if (track.album.release_date) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: track.album.release_date,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "album_name":
        if (track.album.name && track.album.external_urls) {
          listItems.push({
            key: item.key,
            teamText: track.album.album_type === "single" ? "シングル名" : track.album.album_type === "album" ? "アルバム名" : "コンピレーション名",
            descriptionText: (
              <Link to={track.album.external_urls.spotify} target="_blank" rel="noreferrer" sx={{ width: "fit-content" }}>
                {track.album.name}
              </Link>
            ),
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "album_type":
        if (track.album.album_type) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: track.album.album_type,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "artists":
        if (track.artists.length) {
          listItems.push({
            key: "artists",
            teamText: "アーティスト",
            descriptionText: (
              <Stack>
                {track.artists.map((artist) => (
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
          descriptionText: track.available_markets.join(", "),
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
      case "duration_ms":
        if (track.duration_ms) {
          const { minutes, seconds } = convertMs(track.duration_ms);

          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: `${minutes}分${seconds}秒`,
          });
        }
        break;
      case "isrc":
        if (track.external_ids.isrc) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: track.external_ids.isrc,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "ean":
        if (track.external_ids.ean) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: track.external_ids.ean,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      case "upc":
        if (track.external_ids.upc) {
          listItems.push({
            key: item.key,
            teamText: item.teamText,
            descriptionText: track.external_ids.upc,
            noteTitle: item.noteTitle ?? "",
            noteText: item.noteText ?? "",
          });
        }
        break;
      default:
        listItems.push({
          key: item.key,
          teamText: item.teamText,
          descriptionText: track[item.key as keyof TrackResponse]!.toString(),
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
          <img src={track.album.images[0].url} alt="" style={{ width: "320px", height: "320px" }} />
        </div>
        <Stack spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            {track.name}
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
            {track.uri && (
              <Link to={track.uri}>
                <Button buttonProps={{ variant: "contained" }}>アプリで開く</Button>
              </Link>
            )}
            {track.external_urls.spotify && (
              <Link to={track.external_urls.spotify} target="_blank" rel="noreferrer">
                <Button buttonProps={{ variant: "outlined" }}>ブラウザで開く</Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
      <DefinitionList listItems={createListData(track)} />
    </>
  );
};
