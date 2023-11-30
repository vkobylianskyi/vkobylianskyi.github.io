import { createTheme } from "@mui/material/styles";
import getDefaultThemePalette from "./get-theme-palette";

const getDefaultTheme = (mode = "dark") =>
    createTheme({
        palette: {
            ...getDefaultThemePalette(mode),
        },
        typography: ({ primary }) => ({
            h2: {
                fontSize: 22,
                color: primary.main,
                textTransform: "uppercase",
                marginBottom: 20,
                fontWeight: 600,

                "@media (min-width:900px)": {
                    fontSize: "28px",
                    marginBottom: 30,
                },
                h5: {
                    fontWeight: 500,
                    fontSize: 17,
                    lineHeight: 1.5,
                },
                nav: {
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: 1.5,
                },
            },
        }),
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiTab: {
                defaultProps: {
                    disableRipple: true,
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.light,
                    }),
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.light,
                        borderRadius: 5,
                    }),
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                        },
                    }),
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
                    root: ({ theme }) => ({
                        padding: theme.spacing(1),
                        "&:hover": {
                            backgroundColor: "rgba(255, 140, 5, 0.08)",
                        },
                    }),
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
                    primary: ({ theme }) => ({
                        fontWeight: theme.typography.fontWeightRegular,
                    }),
                },
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: "inherit",
                        minWidth: "auto",
                        backgroundColor: "transparent !important",
                        marginRight: theme.spacing(2),
                        "& svg": {
                            fontSize: 20,
                        },
                    }),
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        height: "48px",
                        "&.Mui-selected": {
                            backgroundColor: "rgba(255, 140, 5, 0.08)",
                            color: theme.palette.primary.main,
                        },
                        "&:hover": {
                            backgroundColor: "rgba(255, 140, 5, 0.08)",
                        },
                    }),
                },
            },
            MuiSelect: {
                styleOverrides: {
                    iconOutlined: ({ theme }) => ({
                        color: theme.palette.secondary.main,
                    }),
                    select: {
                        display: "flex",
                        width: 115,
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderColor: theme.palette.secondary.main,
                        ":hover": {
                            ".MuiOutlinedInput-notchedOutline": {
                                borderColor: theme.palette.secondary.main,
                                color: theme.palette.secondary.main,
                            },
                        },
                    }),
                },
            },
            MuiGrid: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.secondary.main,
                    }),
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.secondary.main,
                    }),
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.secondary.main,
                    }),
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    input: ({ theme }) => ({
                        color: theme.palette.secondary.main,
                        "&:-webkit-autofill": {
                            transitionDelay: "9999s",
                            transitionProperty: "background-color, color",
                        },
                    }),
                    root: ({ theme }) => ({
                        "&:hover:not(.Mui-disabled, .Mui-error):before": {
                            borderBottomColor: `${theme.palette.secondary.main} !important`,
                        },
                    }),
                },
            },
            MuiAlert: {
                styleOverrides: {
                    action: {
                        paddingTop: 0,
                        color: "#155724",
                        backgroundColor: "#d4edda",
                    },
                    icon: {
                        color: "#155724 !important",
                    }
                },
            },
            MuiSnackbar: {
                styleOverrides: {
                    root: {
                        ".MuiPaper-root": {
                            color: "#155724",
                            backgroundColor: "#d4edda",
                        },
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.secondary.main,
                    }),
                },
            },
        },
        mixins: {
            toolbar: {
                minHeight: 48,
            },
        },
    });

export default getDefaultTheme;
