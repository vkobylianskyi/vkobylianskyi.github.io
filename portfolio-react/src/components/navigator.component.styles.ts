import { ListItem, styled } from "@mui/material";

export const ListItemImage = styled("img")`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: 2px solid #fff;
    border-radius: 50%;
    margin-top: 8px;
`;

export const ListItemContentWrapper = styled("div")`
    text-align: center;
    margin-top: 16px;
`;

export const ListItemWrapper = styled(ListItem)`
    flex-direction: column;
`;
