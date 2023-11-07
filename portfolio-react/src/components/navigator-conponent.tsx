import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateIcon from "@mui/icons-material/Create";
import ExtensionIcon from "@mui/icons-material/Extension";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BuildIcon from "@mui/icons-material/Build";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from '@mui/icons-material/Public';

import {
    ListItemImage,
    ListItemContentWrapper,
    ListItemWrapper,
} from "./navigator.component.styles.ts";

import profileImage from "./public/profile.jpg";
import { Typography } from "@mui/material";

const categories = [
    {
        id: "Main",
        children: [
            { id: "Welcome", icon: <PublicIcon />, active: true },
            { id: "About Me", icon: <CreateIcon />, },
            { id: "My Experience", icon: <ExtensionIcon /> },
            { id: "My Pet projects", icon: <AccountTreeIcon /> },
            { id: "Skills", icon: <BuildIcon /> },
            {
                id: "Contact Me",
                icon: <ConnectWithoutContactIcon />,
            },
            {
                id: "My CV",
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        id: "Contacts",
        children: [
            { id: "Facebook", icon: <FacebookIcon /> },
            { id: "Linkedin", icon: <LinkedInIcon /> },
            { id: "GitHub", icon: <GitHubIcon /> },
            { id: "Email", icon: <EmailIcon /> },
        ],
    },
];

const item = {
    py: "2px",
    px: 3,
    color: (theme) => theme.palette.secondary.main,
    "&:hover, &:focus": {
        bgcolor: "rgba(255, 255, 255, 0.08)",
    },
};

const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
};

export default function Navigator(props: DrawerProps) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItemWrapper
                    sx={{
                        ...item,
                        ...itemCategory,
                        fontSize: 22,
                        color: "#fff",
                    }}
                >
                    <ListItemImage
                        src={profileImage}
                        alt="Volodymyr Kobylianskiy"
                    />
                    <ListItemContentWrapper>
                        <Typography variant="h5">
                            Volodymyr Kobylianskiy
                        </Typography>
                        <Typography>Front-end developer</Typography>
                    </ListItemContentWrapper>
                </ListItemWrapper>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: (theme) => theme.palette.primary.light }}>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
