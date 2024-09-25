import { Header } from "@/components/layouts/Header";
import { Breadcrumbs } from "@/components/ui/navigations/Breadcrumbs";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export const Root = (): JSX.Element => {
  const { breadcrumbItem } = useBreadcrumbs();

  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 2 }}>
        <Breadcrumbs breadcrumbItem={breadcrumbItem} />
        <Outlet />
      </Box>
    </>
  );
};
