import { Box, Typography, styled } from "@mui/material";

export const EducationWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: 40,
        },
    })}
`;

export const RecommendationPhoto = styled("img")`
    width: 100%;
    max-width: 180px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: block;
    margin-left: auto;
    margin-right: auto;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            marginLeft: 0,
        },
    })}
`;

export const RecommendationLogoWrapper = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 8px;
    ${({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
    })};
`;

export const RecommendationCompanyLogo = styled("img")`
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 8px;
`;

export const RecommendationTitle = styled(Typography)`
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 16px;
    color: ${({ theme }) => theme.palette.primary.main};
`;

export const RecommendationSubtitle = styled(Typography)`
    font-size: 22px;
    line-height: 30px;
    color: ${({ theme }) => theme.palette.secondary.main};
`;