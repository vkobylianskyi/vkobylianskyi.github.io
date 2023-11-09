import * as React from "react";
import Container from "@mui/material/Container";
import Carousel from "react-material-ui-carousel";
import { useTranslation } from "react-i18next";

import {
    ExperienceWrapper,
    ExperienceGridWrapper,
    ExperienceImage,
    ExperienceTitle,
    ExperienceSubtitle,
    ExperienceDate,
    ExperienceListItemCircle,
    ExperienceListItemText,
    ExperienceListGrid,
} from "./experience.component.styles.ts";
import { Box, Grid, List, ListItem, ListItemIcon, Typography, useMediaQuery, useTheme } from "@mui/material";

import cexLogo from "./public/cex-logo.svg";
import etLogo from "./public/etc-logo.svg";

export default function Experience() {
    const cexExperience = [
        "cexExperienceFirstItem",
        "cexExperienceSecondItem",
        "cexExperienceThirdItem",
        "cexExperienceFourthItem",
        "cexExperienceFifthItem",
        "cexExperienceSixthItem",
        "cexExperienceSeventhItem",
        "cexExperienceEighthItem",
        "cexExperienceNinthItem",
        "cexExperienceTenthItem",
    ];

    const argoPerceptionExperience = [
        "argoPerceptionExperienceFirstItem",
        "argoPerceptionExperienceSecondItem",
        "argoPerceptionExperienceThirdItem",
        "argoPerceptionExperienceFourthItem",
        "argoPerceptionExperienceFifthItem",
        "argoPerceptionExperienceSixthItem",
        "argoPerceptionExperienceSeventhItem",
    ];

    const etceteraExperience = [
        "etceteraExperienceFirstItem",
        "etceteraExperienceSecondItem",
        "etceteraExperienceThirdItem",
        "etceteraExperienceFifthItem",
        "etceteraExperienceSixthItem",
        "etceteraExperienceSeventhItem",
        "etceteraExperienceEighthItem",
    ];

    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up("md"));

    const [t] = useTranslation();

    return (
        <Container>
            <ExperienceWrapper>
                <Typography variant="h2" align="center">
                    {t('experienceSectionTitle')}
                </Typography>
                <Carousel
                    autoPlay={false}
                    animation="slide"
                    indicatorIconButtonProps={{
                        style: {
                            padding: "10px",
                            color: "#515151",
                        },
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: theme.palette.primary.main,
                        },
                    }}
                >
                    <Box>
                        <ExperienceGridWrapper container spacing={4} alignItems={"center"}>
                            <Grid item xs={3} md={2} lg={1}>
                                <ExperienceImage src={cexLogo} alt="CEX.IO logo" />
                            </Grid>
                            <Grid item xs={9} md={10} lg={11}>
                                <ExperienceTitle>CEX.IO</ExperienceTitle>
                            </Grid>
                        </ExperienceGridWrapper>
                        <Grid container spacing={7}>
                            <ExperienceListGrid item xs={12} md={10} lg={11} justifyContent={"center"}>
                                <ExperienceSubtitle>{t("welcomeDevelop")} (HTML/CSS coder)</ExperienceSubtitle>
                                <ExperienceDate>{t("cexExperienceDate")}</ExperienceDate>
                                <List>
                                    {cexExperience.map((listItem, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <ExperienceListItemCircle></ExperienceListItemCircle>
                                            </ListItemIcon>
                                            <ExperienceListItemText>{t(listItem)}</ExperienceListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </ExperienceListGrid>
                        </Grid>
                    </Box>
                    <Box>
                        <ExperienceGridWrapper container spacing={isSmUp ? 4 : 0} alignItems={"center"}>
                            <Grid item xs={0} md={2} lg={1} />
                            <Grid item xs={12} md={10} lg={11}>
                                <ExperienceTitle>Argo perception</ExperienceTitle>
                            </Grid>
                        </ExperienceGridWrapper>
                        <Grid container spacing={7}>
                            <ExperienceListGrid item xs={12} md={10} lg={11}>
                                <ExperienceSubtitle>{t("welcomeDevelop")} (HTML/CSS coder)</ExperienceSubtitle>
                                <ExperienceDate>{t("argoPerceptionExperienceDate")}</ExperienceDate>
                                <List>
                                    {argoPerceptionExperience.map((listItem, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <ExperienceListItemCircle></ExperienceListItemCircle>
                                            </ListItemIcon>
                                            <ExperienceListItemText>{t(listItem)}</ExperienceListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </ExperienceListGrid>
                        </Grid>
                    </Box>
                    <Box>
                        <ExperienceGridWrapper container spacing={4} alignItems={"center"}>
                            <Grid item xs={3} md={2} lg={1}>
                                <ExperienceImage src={etLogo} alt="Etcetera logo" />
                            </Grid>
                            <Grid item xs={9} md={10} lg={11}>
                                <ExperienceTitle>Etcetera</ExperienceTitle>
                            </Grid>
                        </ExperienceGridWrapper>
                        <Grid container spacing={7}>
                            <ExperienceListGrid item xs={12} md={10} lg={11}>
                                <ExperienceSubtitle>{t("welcomeDevelop")}</ExperienceSubtitle>
                                <ExperienceDate>{t("etceteraExperienceDate")}</ExperienceDate>
                                <List>
                                    {etceteraExperience.map((listItem, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <ExperienceListItemCircle></ExperienceListItemCircle>
                                            </ListItemIcon>
                                            <ExperienceListItemText>{t(listItem)}</ExperienceListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </ExperienceListGrid>
                        </Grid>
                    </Box>
                </Carousel>
            </ExperienceWrapper>
        </Container>
    );
}
