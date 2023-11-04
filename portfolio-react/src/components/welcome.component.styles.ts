import { Grid, Link, Typography, styled } from "@mui/material";

export const WelcomeWrapper = styled(Grid)`
    padding: 40px;
    background-color: #262626;
    margin-top: 40px;
    border-radius: 5px;
`;

export const WelcomeTitle = styled(Typography)`
    font-size: 26px;
    font-weight: 300;
    margin-bottom: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
`;

export const WelcomeSubtitle = styled(Typography)`
    font-size: 70px;
    font-weight: 900;
    background: -webkit-linear-gradient(right, #d61a5e, #ff8c05);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 87px;
`;
export const WelcomeAction = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    display: block;
    width: 130px;
    background: linear-gradient(135deg, #ff8c05 0%, #d61a5e 100%);
    color: #fff;
    border: 0;
    margin-top: 50px;
    margin-right: auto;
    border-radius: 2px;
    padding: 13px 20px;
    font-weight: 700;
    font-size: 16px;
`;

export const WelcomeImage = styled("img")`
    width: 100%;
`;
