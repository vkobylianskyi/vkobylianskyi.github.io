import * as React from "react";
import Container from "@mui/material/Container";

import {
    WelcomeWrapper,
    WelcomeAction,
    WelcomeTitle,
    WelcomeSubtitle,
    WelcomeImage,
} from "./welcome.component.styles.ts";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import welcomeImage from "./public/welcome-image.png";

export default function Welcome() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Container>
            <WelcomeWrapper>
                <Grid
                    container
                    alignItems={"center"}
                >
                    <Grid item xs={12} md={6}>
                        <WelcomeTitle align={isDesktop ? "left" : "center"}>
                            I AM VOLODYMYR KOBYLIANSKIY
                        </WelcomeTitle>
                        <WelcomeSubtitle align={isDesktop ? "left" : "center"}>
                            Front-end developer
                        </WelcomeSubtitle>
                        <WelcomeAction>Contact Me</WelcomeAction>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: "none", md: "block"} }}>
                        <WelcomeImage
                            src={welcomeImage}
                            alt="Volodymyr Kobylianskiy"
                        />
                    </Grid>
                </Grid>
            </WelcomeWrapper>
        </Container>
    );
}
