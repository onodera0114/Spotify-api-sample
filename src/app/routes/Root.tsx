import { Header } from "@/components/layouts/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};
