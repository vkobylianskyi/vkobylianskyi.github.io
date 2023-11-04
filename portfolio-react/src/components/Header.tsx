import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface HeaderProps {
    onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
    const { onDrawerToggle } = props;

    const [language, setLanguage] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0} sx={{ paddingTop: "12px", paddingBottom: "12px" }}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center" justifyContent="flex-end" >
                        <Grid
                            sx={{ display: { sm: "none", xs: "block" } }}
                            item
                        >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Change theme">
                                <IconButton color="inherit">
                                    <Brightness4Icon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <FormControl
                                sx={{ m: 1, minWidth: 120 }}
                                size="small"
                            >
                                <InputLabel id="language-select-label">Language</InputLabel>
                                <Select
                                    labelId="language-select-label"
                                    id="language-select"
                                    value={language}
                                    label="language"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>English</MenuItem>
                                    <MenuItem value={20}>Ukrainian</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
