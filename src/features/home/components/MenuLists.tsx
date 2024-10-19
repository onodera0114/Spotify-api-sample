import { Grid2 } from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MicIcon from "@mui/icons-material/Mic";
import StarIcon from "@mui/icons-material/Star";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import AlbumIcon from "@mui/icons-material/Album";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { MenuItem, MenuListItems } from "@/features/home/components/MenuListItem";

export const MenuLists = (): JSX.Element => {
  const menus: MenuItem[] = [
    {
      icon: AudiotrackIcon,
      text: "曲検索",
      route: "/search/track",
    },
    {
      icon: AlbumIcon,
      text: "アルバム検索",
      route: "",
    },
    {
      icon: MicIcon,
      text: "アーティスト検索",
      route: "",
    },
    {
      icon: StarIcon,
      text: "アーティスト人気曲検索",
      route: "",
    },
    {
      icon: TrendingUpIcon,
      text: "日本の人気曲",
      route: "",
    },
    {
      icon: QueueMusicIcon,
      text: "プレイリスト表示",
      route: "",
    },
  ];

  return (
    <>
      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {menus.map((menuItem, index) => (
          <Grid2 key={index} size={4}>
            <MenuListItems menuItem={menuItem} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
