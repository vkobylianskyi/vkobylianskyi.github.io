import { createContext, useState, useMemo, Suspense } from "react";
import getDefaultTheme from "./theme/default/default.theme.ts";
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import translationEn from "./assets/translations/en/translation.json";
import translationUa from "./assets/translations/ua/translation.json";

import Navigator from "./components/navigator.component.tsx";
import Header from "./components/header.component.tsx";
import Welcome from "./components/welcome.component.tsx";
import About from "./components/about.component.tsx";
import Experience from "./components/experience.component.tsx";
import Projects from "./components/projects.component.tsx";
import Skills from "./components/skills.component.tsx";
import Education from "./components/education.component.tsx";
import Contact from "./components/contact.component.tsx";
import Document from "./components/documents.component.tsx";
import Copy from "./components/copy.component.tsx";

import { MainBoxWrapper } from "./App.styles.ts";

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    mode: "dark",
});

function App() {

    const availableModes = ["dark", "light"];

    const getModeFromLs = () => {
        const mode = localStorage.getItem("mode");
        if (!mode || !availableModes.includes(mode)) {
            localStorage.setItem("mode", availableModes[0]);
            return availableModes[0];
        }
        return mode;
    };

    const [mode, setMode] = useState(getModeFromLs());

    const colorMode = useMemo(
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

    const [mobileOpen, setMobileOpen] = useState(false);
    const isSmUp = useMediaQuery(defaultTheme.breakpoints.up("sm"));
    const drawerWidth = 256;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    i18n.use(initReactI18next)
        .use(LanguageDetector)
        .use(HttpApi)
        .init({
            supportedLngs: ["en", "ua"],
            fallbackLng: "en",
            detection: {
                order: [
                    "cookie",
                    "localStorage",
                    "htmlTag",
                    "path",
                    "subdomain",
                ],
                caches: ["cookie"],
            },
            resources: {
                en: { translation: translationEn },
                ua: { translation: translationUa },
            },
        });

    return (
        <Suspense fallback="Loading...">
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
                                    PaperProps={{
                                        style: { width: drawerWidth },
                                    }}
                                    sx={{
                                        display: { sm: "block", xs: "none" },
                                    }}
                                />
                            </Box>
                            <MainBoxWrapper>
                                <Header onDrawerToggle={handleDrawerToggle} />
                                <Welcome />
                                <About />
                                <Experience />
                                <Projects />
                                <Skills />
                                <Education />
                                <Contact />
                                <Document />
                                <Copy />
                            </MainBoxWrapper>
                        </Box>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </div>
        </Suspense>
    );
}

export default App;
