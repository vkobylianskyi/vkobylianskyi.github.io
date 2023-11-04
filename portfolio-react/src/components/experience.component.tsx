import * as React from "react";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    ExperienceSliderWrapper,
    ExperienceWrapper,
    ExperienceGridWrapper,
    ExperienceImage,
    ExperienceTitle,
    ExperienceSubtitle,
    ExperienceSliderItemWrapper,
    ExperienceDate,
    ExperienceList,
    ExperienceListItemIcon,
    ExperienceListItemCircle,
    ExperienceListItemText,
} from "./experience.component.styles.ts";
import { Grid, ListItem, Typography } from "@mui/material";

import cexLogo from "./public/cex-logo.svg";
import etLogo from "./public/etc-logo.svg";

export default function Experience() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const cexExperience = [
        "creating landing pages (Responsive and Adaptive web design, Mobile First approach, Cross-browser layout);",
        "creating an email-letter layout with IE support for light and dark screen themes;",
        "creating landing pages and web applications using React and TypeScript;",
        "interaction of pages with API;",
        "support and partial development of WordPress;",
        "creating a library of components using MUI;",
        "development pages using Strapi CMS;",
        "creating pages using the styled component approach;",
        "rendering optimization tasks;",
        "assets loading performance tasks;",
        " JS, CSS animations - sliders, smooth scroll.",
    ];

    const argoPerceptionExperience = [
        "creating markup for application about plant diseases;",
        "creating an email-letter;",
        "working with a responsive site.",
    ];

    const etceteraExperience = [
        "creating landing pages (Responsive and Adaptive web design, Mobile First approach);",
        "basic Javascript (DOM manipulation, AJAX, contact forms);",
        "rendering optimization tasks;",
        "assets loading performance tasks;",
        "basic JS animations - sliders, smooth scroll;",
        "writing code that has progressive enhancement and graceful degradation;",
        "bootstrap development.",
    ];

    return (
        <Container>
            <ExperienceWrapper>
                <Typography variant="h2" align="center">
                    My Experience
                </Typography>
                <ExperienceSliderWrapper {...settings}>
                    <ExperienceSliderItemWrapper>
                        <ExperienceGridWrapper container spacing={4}>
                            <Grid item xs={1}>
                                <ExperienceImage
                                    src={cexLogo}
                                    alt="CEX.IO logo"
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <ExperienceTitle>CEX.IO</ExperienceTitle>
                                <ExperienceSubtitle>
                                    Front-end developer (HTML/CSS coder)
                                </ExperienceSubtitle>
                                <ExperienceDate>
                                    Jun 2019 - Present
                                </ExperienceDate>
                                <ExperienceList>
                                    {cexExperience.map((listItem, index) => (
                                        <ListItem key={index}>
                                            <ExperienceListItemIcon>
                                                <ExperienceListItemCircle></ExperienceListItemCircle>
                                            </ExperienceListItemIcon>
                                            <ExperienceListItemText>
                                                {listItem}
                                            </ExperienceListItemText>
                                        </ListItem>
                                    ))}
                                </ExperienceList>
                            </Grid>
                        </ExperienceGridWrapper>
                    </ExperienceSliderItemWrapper>
                    <ExperienceSliderItemWrapper>
                        <ExperienceGridWrapper container>
                            <Grid item xs={1} />
                            <Grid item xs={11}>
                                <ExperienceTitle>
                                    Argo perception
                                </ExperienceTitle>
                                <ExperienceSubtitle>
                                    Front-end developer (HTML/CSS coder)
                                </ExperienceSubtitle>
                                <ExperienceDate>
                                    February 2019 - June 2019
                                </ExperienceDate>
                                <ExperienceList>
                                    {argoPerceptionExperience.map(
                                        (listItem, index) => (
                                            <ListItem key={index}>
                                                <ExperienceListItemIcon>
                                                    <ExperienceListItemCircle></ExperienceListItemCircle>
                                                </ExperienceListItemIcon>
                                                <ExperienceListItemText>
                                                    {listItem}
                                                </ExperienceListItemText>
                                            </ListItem>
                                        )
                                    )}
                                </ExperienceList>
                            </Grid>
                        </ExperienceGridWrapper>
                    </ExperienceSliderItemWrapper>
                    <ExperienceSliderItemWrapper>
                        <ExperienceGridWrapper container>
                            <Grid item xs={1}>
                                <ExperienceImage
                                    src={etLogo}
                                    alt="Etcetera logo"
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <ExperienceTitle>Etcetera</ExperienceTitle>
                                <ExperienceSubtitle>
                                    Front-end developer
                                </ExperienceSubtitle>
                                <ExperienceDate>
                                    October 2018 - February 2019
                                </ExperienceDate>
                                <ExperienceList>
                                    {etceteraExperience.map(
                                        (listItem, index) => (
                                            <ListItem key={index}>
                                                <ExperienceListItemIcon>
                                                    <ExperienceListItemCircle></ExperienceListItemCircle>
                                                </ExperienceListItemIcon>
                                                <ExperienceListItemText>
                                                    {listItem}
                                                </ExperienceListItemText>
                                            </ListItem>
                                        )
                                    )}
                                </ExperienceList>
                            </Grid>
                        </ExperienceGridWrapper>
                    </ExperienceSliderItemWrapper>
                </ExperienceSliderWrapper>
            </ExperienceWrapper>
        </Container>
    );
}
