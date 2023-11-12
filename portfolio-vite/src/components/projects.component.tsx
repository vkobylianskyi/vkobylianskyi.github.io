import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

import { ProjectsWrapper, ProjectsBox, ProjectsSubtitle } from "./projects.component.styles.ts";
import { Grid, Typography } from "@mui/material";

import { CardFlip } from "./card-flip/card-flip.component.tsx";

const cardContent = [
    {
        background:
            "url('src/assets/img/cex-about-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "CEX.IO About Us",
            description: "React, SASS, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/cex-competition-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "CEX.IO Plus Competition",
            description: "Next, Styled Components, Type Script, Material UI, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/cex-nft-image.png') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/metaverse-and-nfts-explained",
        backSide: {
            title: "Metaverse and NFT",
            description: "React, SASS, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/cex-prices-image.png') no-repeat center center / cover, #FFFFFF",
        href: "https://cex.io/prices",
        backSide: {
            title: "CEX.IO Prices",
            description: "React, SASS, Webpack.",
        },
    },
    {
        background:
            "url('src/assets/img/third-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Ingredients & Extracts",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Gulp.JS",
        },
    },
    {
        background:
            "url('src/assets/img/second-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "SunTour",
            description: "HTML, SASS, JS, Jquery, Bootstrap, Webpack",
        },
    },
    {
        background:
            "url('src/assets/img/fourth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Sensational Food",
            description:
                "HTML, SASS, JS, Jquery, Bootstrap, Swiper.JS, Webpack",
        },
    },
    {
        background:
            "url('src/assets/img/fifth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Web developer site",
            description: "HTML, SASS, JS, Bootstrap, Webpack",
        },
    },
    {
        background:
            "url('src/assets/img/sixth-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Project management application",
            description: "HTML, SASS, JS, Webpack",
        },
    },
    {
        background:
            "url('src/assets/img/seventh-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Shaker Bottles",
            description:
                "HTML, SASS, JS, Jquery, Bootstrap, Swiper.JS, Webpack",
        },
    },
    {
        background:
            "url('src/assets/img/first-project-image.png') no-repeat center center / cover, #FFFFFF",
        href: "#",
        backSide: {
            title: "Join the colors",
            description: "HTML, SASS, Gulp.JS",
        },
    },
    {
        background:
            "url('src/assets/img/eighth-project-image.png') no-repeat center center / cover, #FFFFFF",
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
        <Container id="projectsSection">
            <ProjectsWrapper>
                <Typography variant="h2" align="center">
                    {t("projectsTitle")}
                </Typography>
                <ProjectsSubtitle> {t('projectsText')}</ProjectsSubtitle>
                <Grid container spacing={3}>
                    {cardContent.map((cardContentItem, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <ProjectsBox >
                                <CardFlip {...cardContentItem} />
                            </ProjectsBox>
                        </Grid>
                    ))}
                </Grid>
            </ProjectsWrapper>
        </Container>
    );
}
