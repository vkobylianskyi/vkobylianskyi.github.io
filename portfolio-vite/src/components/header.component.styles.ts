import { AppBar, styled } from "@mui/material";

export const HeaderWrapper = styled(AppBar)`
    padding-top: 12px;
    padding-bottom: 12px;
    width: calc(100% - 32px);
    margin-left: 16px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);

    ${({ theme }) => ({
        [theme.breakpoints.up("sm")]: {
            width: "calc(100% - 48px)",
            marginLeft: 24,
        },
    })}
`;

export const MenuItemImage = styled("img")`
    width: 24px;
    height: 24px;
    padding-right: 6px;
`;