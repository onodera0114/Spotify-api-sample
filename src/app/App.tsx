import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppRouter } from "@/app/Router";
import { AppProvider } from "./Provider";

export const App = (): JSX.Element => {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
    },
    palette: {
      primary: {
        light: "#64b5f6",
        main: "#2196f3",
        dark: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </ThemeProvider>
  );
};
