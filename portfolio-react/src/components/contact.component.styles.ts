import { Box, styled } from "@mui/material";

export const ContactWrapper = styled(Box)`
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