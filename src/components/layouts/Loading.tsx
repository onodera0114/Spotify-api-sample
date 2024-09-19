import { CircularProgress, Stack } from "@mui/material";

export const Loading = (): JSX.Element => {
  return (
    <Stack sx={{ height: "calc(100vh - 64px)", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress size={70} />
    </Stack>
  );
};
