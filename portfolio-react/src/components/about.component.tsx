import * as React from "react";
import Container from "@mui/material/Container";

import {
    AboutWrapper,
    AboutGridWrapper,
    AboutImage,
    AboutTitle,
    AboutSubtitle,
} from "./about.component.styles.ts";
import { Box, Grid, Typography } from "@mui/material";

import aboutImage from "./public/about-image.jpg";

export default function About() {
    return (
        <Container>
            <AboutWrapper>
                <Typography variant="h2">ABOUT ME</Typography>
                <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={6}>
                        <AboutTitle>I am Front-end developer</AboutTitle>
                        <AboutSubtitle>
                            Hello, I am Front-end developer with solid
                            mathematical background. My key skills are
                            self-motivation, precision and quality. My main goal
                            is to create a high-quality product for my customers
                            and make my customers happy with my work. I pay a
                            lot of attention to communication as I understand
                            how important this part of our work is.
                        </AboutSubtitle>
                    </Grid>
                    <Grid item xs={6}>
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
