import * as React from "react";
import Container from "@mui/material/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    EducationWrapper,
    EducationGrid,
    EducationIcon,
    EducationTitle,
    EducationSubtitle,
    EducationDate
} from "./education.component.styles.ts";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import educationIcon from "./public/education-icon.jpg";

const educationList = [
    {
        icon: educationIcon,
        title: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
        subtitle: "Bachelor's degree, software developer",
        date: "2018 - 2021",
    },
    {
        icon: educationIcon,
        title: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
        subtitle: "Master's degree, power engineering",
        date: "2011 - 2017",
    },
];

export default function Education() {

    const theme = useTheme();
    const isTabletWide = useMediaQuery(theme.breakpoints.up("md"));
    
    return (
        <Container>
            <EducationWrapper>
                <Typography variant="h2" align="center">
                    EDUCATION
                </Typography>
                {educationList.map((educationItem, index) => (
                    <EducationGrid key={index} container spacing={3} alignItems={"center"} justifyContent={isTabletWide ? "flex-start" : "center"}>
                        <Grid item xs={8} md={3} lg={2}>
                            <EducationIcon
                                src={educationItem.icon}
                                alt={educationItem.icon}
                            />
                        </Grid>
                        <Grid item xs={12} md={9} lg={10}>
                            <EducationTitle textAlign={isTabletWide ? "left" : "center"}>{educationItem.title}</EducationTitle>
                            <EducationSubtitle textAlign={isTabletWide ? "left" : "center"}>{educationItem.subtitle}</EducationSubtitle>
                            <EducationDate textAlign={isTabletWide ? "left" : "center"}>{educationItem.date}</EducationDate>
                        </Grid>
                    </EducationGrid>
                ))}
            </EducationWrapper>
        </Container>
    );
}
