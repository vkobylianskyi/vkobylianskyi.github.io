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
import { Grid, Typography } from "@mui/material";

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
    return (
        <Container>
            <EducationWrapper>
                <Typography variant="h2" align="center">
                    EDUCATION
                </Typography>
                {educationList.map((educationItem, index) => (
                    <EducationGrid key={index} container spacing={3} alignItems={"center"}>
                        <Grid item xs={2}>
                            <EducationIcon
                                src={educationItem.icon}
                                alt={educationItem.icon}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <EducationTitle>{educationItem.title}</EducationTitle>
                            <EducationSubtitle>{educationItem.subtitle}</EducationSubtitle>
                            <EducationDate>{educationItem.date}</EducationDate>
                        </Grid>
                    </EducationGrid>
                ))}
            </EducationWrapper>
        </Container>
    );
}
