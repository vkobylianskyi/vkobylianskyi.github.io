import { Box, styled } from "@mui/material";

export const MainBoxWrapper = styled(Box)`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    flex: 1;
    display: flex;
    flex-direction: column;
`;
