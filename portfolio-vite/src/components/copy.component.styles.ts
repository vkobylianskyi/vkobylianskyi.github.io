import { Box, Typography, styled } from "@mui/material";

export const CopyWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: 40,
        },
    })}
`;

export const CopyText = styled(Typography)`
    color: ${({ theme }) => theme.palette.secondary.main};
`;
