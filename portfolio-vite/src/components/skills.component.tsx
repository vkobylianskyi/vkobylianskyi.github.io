import Container from "@mui/material/Container";

import {
    SkillsWrapper,
    SkillsIcon,
    SkillsBoxWrapper,
} from "./skills.component.styles.ts";
import { Grid, Typography } from "@mui/material";

import htmlLogo from "../assets/img/html-logo.png";
import cssLogo from "../assets/img/css-logo.png";
import jsLogo from "../assets/img/js-logo.png";
import jqueryLogo from "../assets/img/jquery-logo.png";
import sassLogo from "../assets/img/sass-logo.png";
import gitLogo from "../assets/img/git-logo.png";
import gulpLogo from "../assets/img/gulp-logo.png";
import bootstrapLogo from "../assets/img/bootstrap-logo.png";
import swiperLogo from "../assets/img/swiper-logo.png";
import photoshopLogo from "../assets/img/photoshop-logo.png";
import figmaLogo from "../assets/img/figma-logo.png";
import reactLogo from "../assets/img/react-logo.png";
import typeScriptLogo from "../assets/img/type-script-logo.png";
import nextLogo from "../assets/img/next-logo.png";
import strapiLogo from "../assets/img/strapi-logo.png";
import npmLogo from "../assets/img/npm-logo.png";
import muiLogo from "../assets/img/mui-logo.png";
import webpackLogo from "../assets/img/webpack-logo.png";
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
