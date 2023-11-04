import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navigator from "./components/Navigator.tsx";
import Header from "./components/Header.tsx";
import Welcome from "./components/welcome.component.tsx";
import About from "./components/about.component.tsx";
import Experience from "./components/experience.component.tsx";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}.
        </Typography>
    );
}

let theme = createTheme({
    palette: {
        primary: {
            light: "#63ccff",
            main: "#009be5",
            dark: "#006db3",
        },
    },
    typography: {
        h2: {
            fontSize: 28,
            color: "#ff8c05",
            textTransform: "uppercase",
            marginBottom: 30,
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
                    backgroundColor: "#081627",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                contained: {
                    boxShadow: "none",
                    "&:active": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    margin: "0 16px",
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up("md")]: {
                        padding: 0,
                        minWidth: 0,
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
                        color: "#4fc3f7",
                    },
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
                        <Box
                            component="footer"
                            sx={{ p: 2, bgcolor: "#eaeff1" }}
                        >
                            <Copyright />
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
