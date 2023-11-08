import * as React from "react";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

import { AboutWrapper, AboutImage, AboutTitle, AboutSubtitle } from "./about.component.styles.ts";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import aboutImage from "./public/about-image.jpg";

export default function About() {
    const theme = useTheme();
    const isTabletWide = useMediaQuery(theme.breakpoints.up("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    const [t] = useTranslation();

    return (
        <Container>
            <AboutWrapper>
                <Typography variant="h2" align={isDesktop ? "left" : "center"}>
                {t('aboutSectionTitle')}
                </Typography>
                <Grid container spacing={isDesktop ? 2 : 4} alignItems={"center"}>
                    <Grid item xs={12} md={6}>
                        <AboutTitle align={isTabletWide ? "left" : "center"}>{t('aboutTitle')}</AboutTitle>
                        <AboutSubtitle align={isTabletWide ? "left" : "center"}>
                        {t('aboutDescription')}
                        </AboutSubtitle>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AboutImage src={aboutImage} alt="Volodymyr Kobylianskiy" />
                    </Grid>
                </Grid>
            </AboutWrapper>
        </Container>
    );
}
