import * as React from "react";
import Container from "@mui/material/Container";

import {
    WelcomeWrapper,
    WelcomeAction,
    WelcomeTitle,
    WelcomeSubtitle,
    WelcomeImage
} from "./welcome.component.styles.ts";
import { Grid } from "@mui/material";

import welcomeImage from "./public/welcome-image.png";

export default function Welcome() {
    return (
        <Container>
            <WelcomeWrapper container spacing={2} alignItems={"center"}>
                <Grid item xs={6}>
                    <WelcomeTitle>
                        I AM VOLODYMYR KOBYLIANSKIY
                    </WelcomeTitle>
                    <WelcomeSubtitle>
                        Front-end developer
                    </WelcomeSubtitle>
                    <WelcomeAction>Contact Me</WelcomeAction>
                </Grid>
                <Grid item xs={6}>
                    <WelcomeImage src={welcomeImage}
                        alt="Volodymyr Kobylianskiy"/>
                </Grid>
            </WelcomeWrapper>
        </Container>
    );
}
