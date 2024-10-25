import { ErrorBoundary } from "react-error-boundary";
// import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export const Album = (): JSX.Element | null => {
  // const params = useParams();
  // const albumId = params.albumId as string;

  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Failed to load comments. Try to refresh the page.</div>}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", flexGrow: 1, my: 2 }}>
            アルバム詳細
          </Typography>
        </ErrorBoundary>
      </div>
    </>
  );
};
