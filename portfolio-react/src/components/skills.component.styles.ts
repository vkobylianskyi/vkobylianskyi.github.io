import { Box, styled } from "@mui/material";

export const SkillsWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    border-radius: 5px;
    gap: 16px;
    flex-wrap: nowrap;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: 40
        },
    })}
`;

export const SkillsBoxWrapper = styled(Box)`
    padding: 10px;
    width: auto;
    height: 130px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 40px 15px rgba(0, 0, 0, 0.23) inset;

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            height: 160
        },
    })}
`;

export const SkillsIcon = styled("img")`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
`;
