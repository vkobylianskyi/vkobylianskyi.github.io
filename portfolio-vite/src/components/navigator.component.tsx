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
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import {
    ListItemImage,
    ListItemContentWrapper,
    ListItemWrapper,
    ScrollLinkWrapper
} from "./navigator.component.styles.ts";

import profileImage from "../assets/img/profile.jpg";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const categories = [
    {
        id: "Main",
        children: [
            {
                id: "welcomeSection",
                listTitle: "navigationWelcome",
                icon: <PublicIcon />,
                active: true,
            },
            {
                id: "aboutSection",
                listTitle: "aboutSectionTitle",
                icon: <CreateIcon />,
            },
            {
                id: "experienceSection",
                listTitle: "experienceSectionTitle",
                icon: <ExtensionIcon />,
            },
            {
                id: "projectsSection",
                listTitle: "projectsTitle",
                icon: <AccountTreeIcon />,
            },
            {
                id: "skillsSection",
                listTitle: "navigationSkill",
                icon: <BuildIcon />,
            },
            {
                id: "educationSection",
                listTitle: "educationTitle",
                icon: <SchoolIcon />,
            },
            {
                id: "contactSection",
                listTitle: "contactTitle",
                icon: <ConnectWithoutContactIcon />,
            },
            {
                id: "documentsSection",
                listTitle: "documentsTitle",
                icon: <InsertDriveFileIcon />,
            },
            {
                id: "navigationDoc",
                listTitle: "navigationDoc",
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        id: "Contacts",
        children: [
            {
                listTitle: "Linkedin",
                icon: <LinkedInIcon />,
                link: "https://www.linkedin.com/in/volodymyr-kobylianskyi-45479a140",
            },
            {
                listTitle: "GitHub",
                icon: <GitHubIcon />,
                link: "https://github.com/vkobylianskyi",
            },
            {
                listTitle: "Facebook",
                icon: <FacebookIcon />,
                link: "https://www.facebook.com/kobylynskyy",
            },
            {
                listTitle: "Email",
                icon: <EmailIcon />,
                link: "mailto:kobylianskiy10@gmail.com",
            },
        ],
    },
];

const item = {
    py: "2px",
    px: 3,
    color: (theme) => theme.palette.secondary.main,
    "&:hover, &:focus": {
        bgcolor: " rgba(255, 140, 5, 0.04)",
    },
};

const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
};

export default function Navigator(props: DrawerProps) {
    const { ...other } = props;

    const [t] = useTranslation();

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
                            {t("navigationTitle")}
                        </Typography>
                        <Typography>{t("welcomeDevelop")}</Typography>
                    </ListItemContentWrapper>
                </ListItemWrapper>
                {categories.map(({ id, children }) => (
                    <Box
                        key={id}
                        sx={{ bgcolor: (theme) => theme.palette.primary.light }}
                    >
                        {children.map(
                            ({
                                id: childId,
                                icon,
                                active,
                                listTitle,
                                link,
                            }, index) => (
                                <ListItem disablePadding key={index}>
                                    <ScrollLinkWrapper
                                        activeClass="active"
                                        to={childId}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={200}
                                    >
                                        <ListItemButton
                                            selected={active}
                                            sx={item}
                                            href={link ? link : null}
                                        >
                                            <ListItemIcon>{icon}</ListItemIcon>
                                            <ListItemText>
                                                {t(listTitle)}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ScrollLinkWrapper>
                                </ListItem>
                            )
                        )}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}