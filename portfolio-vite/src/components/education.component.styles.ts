import { Box, Grid, Typography, styled } from "@mui/material";

export const EducationWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: 40
        },
    })}
`;

export const EducationGrid = styled(Grid)`
    &:last-of-type {
        margin-top: 0;
    }
`;

export const EducationIcon = styled("img")`
    width: 100%;
    max-width: 160px;
    border-radius: 50%;
    border: 10px solid #fff;
    display: block;
    margin-left: auto;
    margin-right: auto;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            marginLeft: 0,
        },
    })}
`;

export const EducationTitle = styled(Typography)`
    font-size: 22px;
    line-height: 30px;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.palette.primary.main};
`;

export const EducationSubtitle = styled(Typography)`
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.palette.secondary.main};
`;

export const EducationDate = styled(Typography)`
    font-size: 16px;
    line-height: 27px;
    color: ${({ theme }) => theme.palette.secondary.main};
`;
