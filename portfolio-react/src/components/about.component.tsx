import * as React from "react";
import Container from "@mui/material/Container";

import {
    AboutWrapper,
    AboutImage,
    AboutTitle,
    AboutSubtitle,
} from "./about.component.styles.ts";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import aboutImage from "./public/about-image.jpg";

export default function About() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Container>
            <AboutWrapper>
                <Typography variant="h2" align={isDesktop ? "left" : "center"}>
                    ABOUT ME
                </Typography>
                <Grid
                    container
                    spacing={isDesktop ? 2 : 4}
                    alignItems={"center"}
                >
                    <Grid item xs={12} md={6}>
                        <AboutTitle align={isDesktop ? "left" : "center"}>
                            I am Front-end developer
                        </AboutTitle>
                        <AboutSubtitle align={isDesktop ? "left" : "center"}>
                            Hello, I am Front-end developer with solid
                            mathematical background. My key skills are
                            self-motivation, precision and quality. My main goal
                            is to create a high-quality product for my customers
                            and make my customers happy with my work. I pay a
                            lot of attention to communication as I understand
                            how important this part of our work is.
                        </AboutSubtitle>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AboutImage
                            src={aboutImage}
                            alt="Volodymyr Kobylianskiy"
                        />
                    </Grid>
                </Grid>
            </AboutWrapper>
        </Container>
    );
}
