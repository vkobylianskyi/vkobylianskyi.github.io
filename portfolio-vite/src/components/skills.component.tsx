import Container from "@mui/material/Container";

import {
    SkillsWrapper,
    SkillsIcon,
    SkillsBoxWrapper,
} from "./skills.component.styles.ts";
import { Grid, Typography } from "@mui/material";

import htmlLogo from "../assets/img/html-logo.webp";
import cssLogo from "../assets/img/css-logo.webp";
import jsLogo from "../assets/img/js-logo.webp";
import jqueryLogo from "../assets/img/jquery-logo.webp";
import sassLogo from "../assets/img/sass-logo.webp";
import gitLogo from "../assets/img/git-logo.webp";
import gulpLogo from "../assets/img/gulp-logo.webp";
import bootstrapLogo from "../assets/img/bootstrap-logo.webp";
import swiperLogo from "../assets/img/swiper-logo.webp";
import photoshopLogo from "../assets/img/photoshop-logo.webp";
import figmaLogo from "../assets/img/figma-logo.webp";
import reactLogo from "../assets/img/react-logo.webp";
import typeScriptLogo from "../assets/img/type-script-logo.webp";
import nextLogo from "../assets/img/next-logo.webp";
import strapiLogo from "../assets/img/strapi-logo.webp";
import npmLogo from "../assets/img/npm-logo.webp";
import muiLogo from "../assets/img/mui-logo.webp";
import webpackLogo from "../assets/img/webpack-logo.webp";
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
        <Container id="skillsSection">
            <SkillsWrapper>
                <Typography variant="h2" align="center">
                    {t("technologyTitle")}
                </Typography>
                <Grid container spacing={3}>
                    {technologyList.map((technologyItem, index) => (
                        <Grid item xs={6} md={3} lg={2} key={index}>
                            <SkillsBoxWrapper >
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
