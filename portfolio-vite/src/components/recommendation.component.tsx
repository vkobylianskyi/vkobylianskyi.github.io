import Container from "@mui/material/Container";

import {
    EducationWrapper,
    RecommendationPhoto,
    RecommendationLogoWrapper,
    RecommendationCompanyLogo,
    RecommendationTitle,
    RecommendationSubtitle,
} from "./recommendation.component.styles.ts";
import {
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import pmPhoto from "../assets/img/pm-photo.jpg";
import techLeadPhoto from "../assets/img/tech-lead-photo.jpg";
import { useTranslation } from "react-i18next";
import cexLogo from "../assets/img/cex-logo.svg";

const responseList = [
    {
        photo: pmPhoto,
        title: "recommendationPmName",
        description: "recommendationPmPosition",
        email: "mailto:alekseykagan93@gmail.com",
        socialLink: "https://www.linkedin.com/in/oleksii-kahan/",
    },
    {
        photo: techLeadPhoto,
        title: "recommendationTechLeadName",
        description: "recommendationTechLeadPosition",
        email: "mailto:y.dehurko@cex.io",
        socialLink: "https://www.linkedin.com/in/e-dehurko/",
    },
];

export default function Recommendation() {
    const [t] = useTranslation();

    const theme = useTheme();
    const isTabletWide = useMediaQuery(theme.breakpoints.up("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Container>
            <EducationWrapper id="recommendationSection">
                <Typography variant="h2" align="center">
                    {t("recommendationTitle")}
                </Typography>
                <Stack
                    direction={isDesktop ? "row" : "column"}
                    justifyContent={"center"}
                    useFlexGap
                    spacing={isDesktop ? 3 : 5}
                >
                    {responseList.map((responseItem, index) => (
                        <Grid
                            key={index}
                            container
                            alignItems={"center"}
                            justifyContent={
                                isDesktop ? "flex-start" : "center"
                            }
                            spacing={3}
                        >
                            <Grid item xs={8} md={4} lg={5}>
                                <RecommendationPhoto
                                    src={responseItem.photo}
                                    alt={responseItem.photo}
                                />
                            </Grid>
                            <Grid item xs={12} md={8} lg={7}>
                                <RecommendationTitle
                                     textAlign={isTabletWide ? "left" : "center"}
                                >
                                    {t(responseItem.title)}
                                </RecommendationTitle>
                                <RecommendationSubtitle
                                     textAlign={isTabletWide ? "left" : "center"}
                                >
                                    {t(responseItem.description)}
                                </RecommendationSubtitle>
                                <RecommendationLogoWrapper>
                                    <RecommendationCompanyLogo
                                        src={cexLogo}
                                        alt="CEX.IO logo"
                                    />
                                    <RecommendationSubtitle>
                                        CEX.IO
                                    </RecommendationSubtitle>
                                </RecommendationLogoWrapper>
                                <Stack
                                    direction="row"
                                    justifyContent={
                                        isTabletWide ? "left" : "center"
                                    }
                                >
                                    <IconButton
                                        sx={{
                                            marginLeft: isDesktop ? "-8px" : "0px",
                                            marginRight: "8px",
                                        }}
                                        size="large"
                                        target="_blank"
                                        color="primary"
                                        href={responseItem.email}
                                    >
                                        <EmailIcon fontSize="large" />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        target="_blank"
                                        color="primary"
                                        href={responseItem.socialLink}
                                    >
                                        <LinkedInIcon fontSize="large" />
                                    </IconButton>
                                </Stack>
                            </Grid>
                        </Grid>
                    ))}
                </Stack>
            </EducationWrapper>
        </Container>
    );
}
