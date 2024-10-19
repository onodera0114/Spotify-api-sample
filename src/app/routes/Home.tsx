import { MenuLists } from "@/features/home/components/MenuLists";
import { Box, Typography } from "@mui/material";

export const Home = (): JSX.Element => {
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", flexGrow: 1, my: 2 }}>
        機能一覧
      </Typography>
      <MenuLists />
    </Box>
  );
};
