import { Breakpoint, Theme, useMediaQuery, useTheme } from "@mui/material";

type BreakpointOrNull = Breakpoint | null;

export const useWidth = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
};
