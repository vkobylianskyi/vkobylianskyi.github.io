import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { ContactWrapper, ContactSubtitle } from "./contact.component.styles.ts";
import {
    Stack,
    IconButton,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
    Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ContactForm from "./form.component.tsx";

export default function Contact() {
    const [t] = useTranslation();

    const contactList = [
        {
            link: "https://www.linkedin.com/in/volodymyr-kobylianskyi-45479a140",
            icon: <LinkedInIcon fontSize="large" />,
        },
        {
            link: "https://github.com/vkobylianskyi",
            icon: <GitHubIcon fontSize="large" />,
        },
        {
            link: "https://www.facebook.com/kobylynskyy",
            icon: <FacebookIcon fontSize="large" />,
        },
        {
            link: "mailto:kobylianskiy10@gmail.com",
            icon: <EmailIcon fontSize="large" />,
        },
    ];

    const theme = useTheme();
    const isTabletWide = useMediaQuery(theme.breakpoints.up("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Container id="contactSection">
            <ContactWrapper>
                <Typography variant="h2" align={isDesktop ? "left" : "center"}>
                    {t("contactTitle")}
                </Typography>
                <Grid
                    container
                    spacing={isDesktop ? 2 : 4}
                     alignItems={isTabletWide ? "center" : "start"}
                >
                    <Grid item xs={12} lg={6}>
                        <Box>
                            <ContactSubtitle
                                align={isDesktop ? "left" : "center"}
                            >
                                {t("contactSubtitle")}
                            </ContactSubtitle>
                        </Box>
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent={isDesktop ? "left" : "center"}
                        >
                            {contactList.map((contactListItem, index) => (
                                <IconButton
                                    key={index}
                                    size="large"
                                    target="_blank"
                                    color="primary"
                                    href={contactListItem.link}
                                >
                                    {contactListItem.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </ContactWrapper>
        </Container>
    );
}
