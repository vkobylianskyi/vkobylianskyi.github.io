import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

import {
    ProjectsWrapper,
    ProjectsBox,
    ProjectsSubtitle,
} from "./projects.component.styles.ts";
import { Grid, Typography } from "@mui/material";

import { CardFlip } from "./card-flip/card-flip.component.tsx";

const cardContent = [
    {
        background:
            "url('src/assets/img/cex-about-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/about",
        backSide: {
            title: "CEX.IO About Us",
            description: "React, SASS, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/cex-competition-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://plus.cex.io/competition",
        backSide: {
            title: "CEX.IO Plus Competition",
            description:
                "Next, Styled Components, Type Script, Material UI, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/cex-nft-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/metaverse-and-nfts-explained",
        backSide: {
            title: "Metaverse and NFT",
            description: "React, SASS, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/cex-prices-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/prices",
        backSide: {
            title: "CEX.IO Prices",
            description: "React, SASS, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/third-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/4/dist/index.html",
        backSide: {
            title: "Ingredients & Extracts",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Gulp.JS",
        },
        codeLink:
            "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/4",
    },
    {
        background:
            "url('src/assets/img/second-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/2/dist/index.html",
        backSide: {
            title: "SunTour",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
        codeLink:
            "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/2",
    },
    {
        background:
            "url('src/assets/img/fourth-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/3/dist/index.html",
        backSide: {
            title: "Sensational Food",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
        codeLink:
        "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/3",
    },
    {
        background:
            "url('src/assets/img/fifth-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/5/dist/index.html",
        backSide: {
            title: "Web developer site",
            description: "HTML, SASS, JS, Bootstrap, Webpack",
        },
        codeLink:
        "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/5",
    },
    {
        background:
            "url('src/assets/img/sixth-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/7/dist/index.html",
        backSide: {
            title: "Project management application",
            description: "HTML, SASS, JS, Webpack",
        },
        codeLink:
        "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/7",
    },
    {
        background:
            "url('src/assets/img/seventh-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/8/dist/index.html",
        backSide: {
            title: "Shaker Bottles",
            description:
                "HTML, SASS, JS, Jquery, Bootstrap, Swiper.JS, Webpack",
        },
        codeLink:
        "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/8",
    },
    {
        background:
            "url('src/assets/img/first-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/1/dist/index.html",
        backSide: {
            title: "Join the colors",
            description: "HTML, SASS, Gulp.JS",
        },
        codeLink:
        "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/1",
    },
    {
        background:
            "url('src/assets/img/eighth-project-image.webp') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/6/dist/index.html",
        backSide: {
            title: "Innovative companies",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
        codeLink:
        "https://github.com/vkobylianskyi/vkobylianskyi.github.io/tree/master/projects/6",
    },
];

export default function Projects() {
    const [t] = useTranslation();

    return (
        <Container id="projectsSection">
            <ProjectsWrapper>
                <Typography variant="h2" align="center">
                    {t("projectsTitle")}
                </Typography>
                <ProjectsSubtitle> {t("projectsText")}</ProjectsSubtitle>
                <Grid container spacing={3}>
                    {cardContent.map((cardContentItem, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <ProjectsBox>
                                <CardFlip {...cardContentItem} />
                            </ProjectsBox>
                        </Grid>
                    ))}
                </Grid>
            </ProjectsWrapper>
        </Container>
    );
}
