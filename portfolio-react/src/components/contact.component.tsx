import * as React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { ContactWrapper } from "./contact.component.styles.ts";
import { Stack, IconButton, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [t] = useTranslation();
    
    return (
        <Container id="contactSection">
            <ContactWrapper>
                <Typography variant="h2" align="center">
                    {t("contactTitle")}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent={"center"}>
                    <IconButton
                        size="large"
                        target="_blank"
                        color="primary"
                        href="https://www.linkedin.com/in/volodymyr-kobylianskyi-45479a140"
                    >
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                        size="large"
                        target="_blank"
                        color="primary"
                        href="https://github.com/vkobylianskyi"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        target="_blank"
                        color="primary"
                        href="https://www.facebook.com/kobylynskyy"
                    >
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="primary"
                        href="mailto:kobylianskiy10@gmail.com"
                    >
                        <EmailIcon fontSize="large" />
                    </IconButton>
                </Stack>
            </ContactWrapper>
        </Container>
    );
}