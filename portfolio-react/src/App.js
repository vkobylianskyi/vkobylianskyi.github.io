import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navigator from "./components/navigator-conponent.tsx";
import Header from "./components/header.component.tsx";
import Welcome from "./components/welcome.component.tsx";
import About from "./components/about.component.tsx";
import Experience from "./components/experience.component.tsx";
import Projects from "./components/projects.component.tsx";
import Skills from "./components/skills.component.tsx";
import Education from "./components/education.component.tsx";
import Contact from "./components/contact.component.tsx";
import Copy from "./components/copy.component.tsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import translationEn from "./components/public/translations/en/translation.json";
import translationUa from "./components/public/translations/ua/translation.json";

import getDefaultTheme from "./themes/default/default.theme"; // Context, that handles toggle theme function

// Context, that handles toggle theme function
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "",
});

function App() {
  // To get the best user experience check this doc link.
  // You can enable the dark or light mode by user default theme from OS.
  // Read https://mui.com/material-ui/customization/dark-mode/#system-preference

  // Available modes, the mode can be dark or light
  const availableModes = ["dark", "light"];
  // get modes from localstorage
  const getModeFromLs = () => {
    const mode = localStorage.getItem("mode");
    if (!mode || !availableModes.includes(mode)) {
      localStorage.setItem("mode", availableModes[0]);
      return availableModes[0];
    }
    return mode;
  };
  // Set the color mode
  const [mode, setMode] = React.useState(getModeFromLs());
  // Toggle color mode though react-context, you can use redux instead the React.createContext
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const currentMode =
            prevMode === availableModes[1]
              ? availableModes[0]
              : availableModes[1];
          localStorage.setItem("mode", currentMode);
          return currentMode;
        });
      },
      mode,
    }),
    []
  );
  const defaultTheme = getDefaultTheme(mode);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(defaultTheme.breakpoints.up("sm"));
  const drawerWidth = 256;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      supportedLngs: ["en", "ua"],
      fallbackLng: "en",
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["cookie"],
      },
      resources: {
        en: { translation: translationEn },
        ua: { translation: translationUa },
      },
    });

  return (
    <React.Suspense fallback="Loading...">
      <div className="App">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Box
                component="nav"
                sx={{
                  width: { sm: drawerWidth },
                  flexShrink: { sm: 0 },
                }}
              >
                {isSmUp ? null : (
                  <Navigator
                    PaperProps={{
                      style: { width: drawerWidth },
                    }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                  />
                )}
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  sx={{ display: { sm: "block", xs: "none" } }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#212121",
                }}
              >
                <Header onDrawerToggle={handleDrawerToggle} />
                <Welcome />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
                <Copy />
              </Box>
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </React.Suspense>
  );
}

export default App;
