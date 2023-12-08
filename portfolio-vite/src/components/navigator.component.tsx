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
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import RecommendIcon from '@mui/icons-material/Recommend';

import cvDocument from "../assets/CV_Volodymyr_Kobylianskyi_Front-end.pdf";

import {
    ListItemImage,
    ListItemContentWrapper,
    ListItemWrapper,
    ScrollLinkWrapper,
} from "./navigator.component.styles.ts";

import profileImage from "../assets/img/profile.jpg";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

type navigatorTypes = {
    id: string;
    children: Array<{
        id?: string;
        listTitle: string;
        icon: ReactNode;
        link?: string;
    }>;
};

const categories: navigatorTypes[] = [
    {
        id: "Main",
        children: [
            {
                id: "welcomeSection",
                listTitle: "navigationWelcome",
                icon: <PublicIcon />,
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
                id: "documentsSection",
                listTitle: "documentsTitle",
                icon: <InsertDriveFileIcon />,
            },
            {
                id: "recommendationSection",
                listTitle: "recommendationTitle",
                icon: <RecommendIcon />,
            },
            {
                id: "contactSection",
                listTitle: "contactTitle",
                icon: <ConnectWithoutContactIcon />,
            },
        ],
    },
    {
        id: "Contacts",
        children: [
            {
                listTitle: "navigationDoc",
                icon: <DescriptionIcon />,
                link: cvDocument,
            },
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
    color: (theme: { palette: { secondary: { main: string } } }) =>
        theme.palette.secondary.main,
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
                        alt="Volodymyr Kobylianskyi"
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
                            ({ id: childId, icon, listTitle, link }, index) => (
                                <ListItem disablePadding key={index}>
                                    <ScrollLinkWrapper
                                        to={childId || ""}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={200}
                                    >
                                        <ListItemButton
                                            sx={item}
                                            onClick={() =>
                                                link && window.open(link)
                                            }
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
                        <Divider sx={{ mt: 1 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
