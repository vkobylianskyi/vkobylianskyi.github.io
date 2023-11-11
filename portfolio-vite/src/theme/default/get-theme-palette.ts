const getDefaultThemePalette = (mode) => {
  return {
    mode,
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
            light: "#ffdcb5",
            main: "#ff8c05",
            dark: "#c66f00",
          },
          secondary: {
            main: "#4a4a4a",
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
