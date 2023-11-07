import { Grid, Link, Typography, styled } from "@mui/material";

export const WelcomeWrapper = styled(Grid)`
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

export const WelcomeTitle = styled(Typography)`
    font-size: 22px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.secondary.main};

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            fontSize: "26px",
            marginBottom: "30px",
        },
    })}
`;

export const WelcomeSubtitle = styled(Typography)`
    font-size: 32px;
    font-weight: 900;
    background: -webkit-linear-gradient(right, #d61a5e, #ff8c05);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 120%;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            fontSize: "70px",
            lineHeight: "87px",
        },
    })}
`;
export const WelcomeAction = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    display: block;
    width: 130px;
    background: linear-gradient(135deg, #ff8c05 0%, #d61a5e 100%);
    color: #fff;
    border: 0;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 2px;
    padding: 13px 20px;
    font-weight: 700;
    font-size: 16px;
    position: relative;

    &:hover::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 90%;
        background: #262626;
        animation: titles 0.4s cubic-bezier(0.25, 0.61, 1, 0.47) forwards;
        transform: translateY(100%);
        animation-delay: 0.1s;
        z-index: 1;
    }

    @keyframes titles {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(-101%);
        }
    }

    ${({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            marginLeft: 0,
        },
    })}

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            marginTop: "50px",
        },
    })}
`;

export const WelcomeImage = styled("img")`
    width: 100%;
`;
