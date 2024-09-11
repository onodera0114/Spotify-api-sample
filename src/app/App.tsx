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
      allVariants: {
        color: "#222",
      },
    },
    palette: {
      primary: {
        main: "#2ebd59",
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
