import * as React from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

import { ProjectsWrapper, ProjectsBox } from "./projects.component.styles.ts";
import { Grid, Typography } from "@mui/material";

import { CardFlip } from "./card-flip/card-flip.component.tsx";

const cardContent = [
    {
        background:
            "url('/public/cex-about-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "CEX.IO About Us",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack.",
        },
    },
    {
        background:
            "url('/public/cex-competition-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "CEX.IO Plus Competition",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack.",
        },
    },
    {
        background:
            "url('/public/cex-nft-image.png') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/metaverse-and-nfts-explained",
        backSide: {
            title: "Metaverse and NFT",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
    },
    {
        background:
            "url('/public/cex-prices-image.png') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/metaverse-and-nfts-explained",
        backSide: {
            title: "CEX.IO Prices",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
    },
    {
        background:
            "url('/public/third-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Ingredients & Extracts",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Gulp.JS",
        },
    },
    {
        background:
            "url('/public/second-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "SunTour",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
    },
    {
        background:
            "url('/public/fourth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Sensational Food",
            description:
                "HTML, SASS, JS, Jquery, Bootstrap, Swiper.JS, Webpack",
        },
    },
    {
        background:
            "url('/public/fifth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Web developer site",
            description: "HTML, SASS, JS, Bootstrap, Webpack",
        },
    },
    {
        background:
            "url('/public/sixth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Project management application",
            description: "HTML, SASS, JS, Webpack",
        },
    },
    {
        background:
            "url('/public/seventh-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Shaker Bottles",
            description:
                "HTML, SASS, JS, Jquery, Bootstrap, Swiper.JS, Webpack",
        },
    },
    {
        background:
            "url('/public/first-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Join the colors",
            description: "HTML, SASS, Gulp.JS",
        },
    },
    {
        background:
            "url('/public/eighth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "https://vkobylianskyi.github.io/projects/6/dist/index.html",
        backSide: {
            title: "Innovative companies",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
    },
];

export default function Projects() {
    const [t] = useTranslation();

    return (
        <Container>
            <ProjectsWrapper>
                <Typography variant="h2" align="center">
                    {t("projectsTitle")}
                </Typography>
                <Grid container spacing={3}>
                    {cardContent.map((cardContentItem, index) => (
                        <Grid item xs={12} md={6} lg={4}>
                            <ProjectsBox key={index}>
                                <CardFlip {...cardContentItem} />
                            </ProjectsBox>
                        </Grid>
                    ))}
                </Grid>
            </ProjectsWrapper>
        </Container>
    );
}
