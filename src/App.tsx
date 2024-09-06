import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@mui/material";

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
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>{import.meta.env.VITE_APP_TITLE}</h1>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </ThemeProvider>
  );
};
