import { Box, Typography, styled } from "@mui/material";

export const ProjectsWrapper = styled(Box)`
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

export const ProjectsBox = styled(Box)`
    width: auto;
    height: 300px;
`;

export const ProjectsSubtitle = styled(Typography)`
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.palette.secondary.main};
    padding-bottom: 24px;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            fontSize: 16,
            marginBottom: 17,
        },
    })}
`;
