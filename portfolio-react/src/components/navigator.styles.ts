import { ListItem, styled } from "@mui/material";

export const ListItemImage = styled("img")`
    width: 80px;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
`;

export const ListItemContentWrapper = styled("div")`
    text-align: center;
    margin-top: 16px;
`;

export const ListItemWrapper = styled(ListItem)`
    flex-direction: column;
`;
