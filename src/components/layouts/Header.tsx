import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@/components/ui/links/Link";

export const Header = (): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" component="h1" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          <Link to="/" color="textPrimary" underline="none">
            Spotify API sample
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
