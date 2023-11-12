import {createTheme} from "@mui/material/styles";
import getDefaultThemePalette from "./get-theme-palette";

// Uncomment while turn on the ts support and rename file to .ts
// declare module "@mui/material/styles" {
//   interface TypographyVariants {
//     nav: CSSProperties;
//   }
//
//   interface TypographyVariantsOptions {
//     nav?: CSSProperties;
//   }
// }

const getDefaultTheme = (mode = "dark") =>
  createTheme({
    palette: {
      ...getDefaultThemePalette(mode)
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
              color: theme.palette.primary.main,
            },
          }),
        },
      },
      MuiSelect: {
        styleOverrides: {
          iconOutlined: ({ theme }) => ({
            color: theme.palette.secondary.main,
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: ({ theme }) => ({
            borderColor: theme.palette.secondary.main,
            "&:not(.Mui-disabled):hover::before": {
              borderColor: "white",
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
