import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

let theme = createTheme({
    palette: {
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
    },
    typography: {
        h2: {
            fontSize: 22,
            color: "#ff8c05",
            textTransform: "uppercase",
            marginBottom: 20,

            "@media (min-width:900px)": {
                fontSize: "28px",
                marginBottom: 30,
            },
        },
        h5: {
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.5,
        },
        nav: {
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: theme.palette.primary.light,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.light,
                    borderRadius: 5,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                    },
                },
                contained: {
                    boxShadow: "none",
                    "&:active": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(255,255,255,0.15)",
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2),
                    "& svg": {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    height: "48px",
                    "&.Mui-selected": {
                        color: theme.palette.primary.main,
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: theme.palette.secondary.main,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: theme.palette.secondary.main,
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    color: theme.palette.secondary.main,
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.secondary.main,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    color: theme.palette.secondary.main,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.palette.secondary.main,
                },
            },
        },
    },
};

const drawerWidth = 256;

function App() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
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
                                PaperProps={{ style: { width: drawerWidth } }}
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
        </div>
    );
}

export default App;
