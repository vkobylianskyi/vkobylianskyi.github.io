import { Box, styled } from "@mui/material";

export const ProjectsWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    border-radius: 5px;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: 40
        },
    })}
`;

export const ProjectsBox = styled(Box)`
    width: auto;
    height: 300px;
`;
