import * as React from "react";
import Container from "@mui/material/Container";

import {
    SkillsWrapper,
    SkillsIcon,
    SkillsBoxWrapper,
} from "./skills.component.styles.ts";
import { Grid, Typography } from "@mui/material";

import htmlLogo from "./public/html-logo.png";
import cssLogo from "./public/css-logo.png";
import jsLogo from "./public/js-logo.png";
import jqueryLogo from "./public/jquery-logo.png";
import sassLogo from "./public/sass-logo.png";
import gitLogo from "./public/git-logo.png";
import gulpLogo from "./public/gulp-logo.png";
import bootstrapLogo from "./public/bootstrap-logo.png";
import swiperLogo from "./public/swiper-logo.png";
import photoshopLogo from "./public/photoshop-logo.png";
import figmaLogo from "./public/figma-logo.png";
import reactLogo from "./public/react-logo.png";
import typeScriptLogo from "./public/type-script-logo.png";
import nextLogo from "./public/next-logo.png";
import strapiLogo from "./public/strapi-logo.png";
import npmLogo from "./public/npm-logo.png";
import muiLogo from "./public/mui-logo.png";
import webpackLogo from "./public/webpack-logo.png";
import { useTranslation } from "react-i18next";

const technologyList = [
    htmlLogo,
    cssLogo,
    jsLogo,
    reactLogo,
    typeScriptLogo,
    nextLogo,
    muiLogo,
    jqueryLogo,
    npmLogo,
    sassLogo,
    webpackLogo,
    gulpLogo,
    gitLogo,
    bootstrapLogo,
    swiperLogo,
    strapiLogo,
    photoshopLogo,
    figmaLogo,
];

export default function Skills() {
    const [t] = useTranslation();
    return (
        <Container id="navigationSkill">
            <SkillsWrapper>
                <Typography variant="h2" align="center">
                    {t("technologyTitle")}
                </Typography>
                <Grid container spacing={3}>
                    {technologyList.map((technologyItem, index) => (
                        <Grid item xs={6} md={3} lg={2}>
                            <SkillsBoxWrapper key={index}>
                                <SkillsIcon
                                    src={technologyItem}
                                    alt={technologyItem}
                                />
                            </SkillsBoxWrapper>
                        </Grid>
                    ))}
                </Grid>
            </SkillsWrapper>
        </Container>
    );
}
