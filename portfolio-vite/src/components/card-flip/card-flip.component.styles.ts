import { alpha, styled } from "@mui/material";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const CardFlipItemTitle = styled(Typography)`
    z-index: 1;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    color: #000;
    padding-bottom: 10px;
`;

export const CardFlipItemSubtitle = styled(Typography)`
    z-index: 1;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: rgba(0, 0, 0, 0.7);
    padding-bottom: 10px;
`;

export const CardFlipWrapper = styled("div")`
    height: 100%;
    width: 100%;
    background-color: #fff;
    perspective: 1000px;
    overflow: hidden;
    border-radius: 24px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
`;

export const CardFlipInner = styled("div")<{ rotate: boolean }>`
    pointer-events: none;
    position: relative;
    width: 101%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;

    ${({ rotate }) =>
        rotate && {
            transform: "rotateY(180deg) translateX(1px)",
        }}
`;

export const CardFlipItem = styled("div")`
    pointer-events: auto;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;

    ${({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            padding: "37px",
        },
    })}
`;

export const CardFlipItemFrontSide = styled(CardFlipItem)<{
    visible: boolean;
}>`
    cursor: pointer;
    overflow: hidden;
    ${({ visible }) =>
        visible && {
            zIndex: "-10",
        }}

    ${({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            "&:hover": {
                button: {
                    svg: {
                        transform: "rotate(-90deg)",
                    },
                },
                img: {
                    scale: "1.1",
                },
            },
            "&:hover .flip-cards__flip-card-image": {
                transform: "scale(1.1)",
            },
        },
    })}
`;

export const CardFlipItemImage = styled("div")<{ background: string }>`
    position: absolute;
    user-select: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ background }) => background};
    z-index: 0;
    object-fit: contain;
    object-position: -33px bottom;
    transition: transform 0.3s ease-out;
    border-radius: 24px;

    ${({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            objectPosition: "left bottom",
        },
    })}
`;

export const CardFlipItemButton = styled(Button)<{ active: boolean }>`
    z-index: 1;
    align-self: flex-end;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    min-width: 56px;
    min-height: 56px;
    color: #fff;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.primary.main};
    margin-top: auto;

    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
    }

    svg {
        transition: transform 0.5s;
    }

    ${({ active, theme }) =>
        active && {
            backgroundColor: theme.palette.text.primary,
        }}
`;

export const CardFlipItemBackSide = styled(CardFlipItem)<{
    visible: boolean;
}>`
    ${({ visible }) =>
        !visible && {
            zIndex: "-10",
        }};
    transform: rotateY(180deg);
`;

export const CardFlipItemBackDescription = styled(Typography)`
    height: 100%;
    flex-grow: 0;
    line-height: 24px;
    color: ${({ theme }) => alpha(theme.palette.text.primary, 0.9)};
    overflow-y: auto;
`;

export const CardFlipItemButtonsWrapper = styled("div")<{
    visible: boolean;
}>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;