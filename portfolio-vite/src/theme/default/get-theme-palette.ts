import { PaletteOptions } from "@mui/material";

const getDefaultThemePalette = (mode: string): PaletteOptions => {
    return {
        mode: mode === "dark" ? "dark" : "light",
        ...(mode === "dark"
            ? {
                  // palette values for dark mode
                  primary: {
                      light: "#262626",
                      main: "#ff8c05",
                      dark: "#212121",
                  },
                  secondary: {
                      main: "#fff",
                  },
                  text: {
                      primary: "#000",
                      secondary: "rgba(0, 0, 0, 0.7);",
                  },
              }
            : {
                  // palette values for light mode
                  primary: {
                      light: "#fff",
                      main: "#ff8c05",
                      dark: "rgb(241, 252, 250)",
                  },
                  secondary: {
                      main: "#0E2026",
                  },
                  background: {
                      default: "#f5f5f5",
                      paper: "#ffffff",
                  },
                  text: {
                      primary: "#212121",
                      secondary: "rgba(33, 33, 33, 0.7)",
                  },
              }),
    };
};
export default getDefaultThemePalette;
