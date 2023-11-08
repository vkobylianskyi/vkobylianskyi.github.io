import { Box, Grid, ListItemText, Typography, styled } from "@mui/material";

export const ExperienceWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    border-radius: 5px;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: "40px",
        },
    })}
`;

export const ExperienceGridWrapper = styled(Grid)`
    margin-bottom: 16px;
`;

export const ExperienceTitle = styled(Typography)`
    font-size: 30px;
    line-height: 110%;
    font-weight: 900;
    color: #ff8c05;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            fontSize: 50
        },
    })}
`;

export const ExperienceSubtitle = styled(Typography)`
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 8px;
    color:${({ theme }) => theme.palette.secondary.main};
`;

export const ExperienceDate = styled(Typography)`
    font-size: 16px;
    line-height: 27px;
    color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ExperienceImage = styled("img")`
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    display: block;
`;

export const ExperienceListGrid = styled(Grid)`
    margin-left: auto;
`;

export const ExperienceListItemText = styled(ListItemText)`
    color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ExperienceListItemCircle = styled("div")`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff8c05;
`;
