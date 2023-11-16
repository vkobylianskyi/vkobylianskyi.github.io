import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';

import {
    WelcomeWrapper,
    WelcomeAction,
    WelcomeTitle,
    WelcomeSubtitle,
    WelcomeImage,
} from "./welcome.component.styles.ts";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import welcomeImage from "../assets/img/welcome-image.png";

export default function Welcome() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const [t] = useTranslation();

    return (
        <Container id="welcomeSection">
            <WelcomeWrapper>
                <Grid container alignItems={"center"}>
                    <Grid item xs={12} md={6}>
                        <WelcomeTitle align={isDesktop ? "left" : "center"}>
                        {t('welcomeTitle')}
                        </WelcomeTitle>
                        <WelcomeSubtitle align={isDesktop ? "left" : "center"}>
                           {t('welcomeDevelop')}
                        </WelcomeSubtitle>
                        <WelcomeAction href="#contactSection">{t('welcomeButtonTitle')}</WelcomeAction>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        sx={{ display: { xs: "none", md: "block" } }}
                    >
                        <WelcomeImage
                            src={welcomeImage}
                            alt="Volodymyr Kobylianskyi"
                        />
                    </Grid>
                </Grid>
            </WelcomeWrapper>
        </Container>
    );
}
