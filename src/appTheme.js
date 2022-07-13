import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    palette: {
      primary: {
        main: "#e3350d",
      },
    },
  },
});
