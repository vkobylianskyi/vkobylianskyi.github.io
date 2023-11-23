import { Box, Typography, styled } from "@mui/material";

export const ContactWrapper = styled(Box)`
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

export const ContactSubtitle = styled(Typography)`
    font-size: 32px;
    line-height: 110%;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.palette.secondary.main};

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            marginBottom: "30px",
        },
    })}
`;
