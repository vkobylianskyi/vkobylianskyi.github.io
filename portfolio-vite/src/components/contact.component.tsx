import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { ContactWrapper } from "./contact.component.styles.ts";
import { Stack, IconButton, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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

    return (
        <Container id="contactSection">
            <ContactWrapper>
                <Typography variant="h2" align="center">
                    {t("contactTitle")}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent={"center"}>
                    {contactList.map((contactListItem, index) => (
                        <IconButton key={index} size="large" target="_blank" color="primary" href={contactListItem.link}>
                            {contactListItem.icon}
                        </IconButton>
                    ))}
                </Stack>
            </ContactWrapper>
        </Container>
    );
}
