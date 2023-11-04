import { Box, Typography, styled } from "@mui/material";

export const AboutWrapper = styled(Box)`
    padding: 40px;
    background-color: #262626;
    margin-top: 40px;
    border-radius: 5px;
    gap: 16px;
    flex-wrap: nowrap;
`;

export const AboutTitle = styled(Typography)`
    font-size: 50px;
    line-height: 110%;
    font-weight: 900;
    margin-bottom: 30px;
    color: #ffffff;
`;

export const AboutSubtitle = styled(Typography)`
    font-size: 16px;
    line-height: 27px;
    color: #ffffff;
`;

export const AboutImage = styled("img")`
    width: 100%;
    border: 4px solid #ddd;
`;
