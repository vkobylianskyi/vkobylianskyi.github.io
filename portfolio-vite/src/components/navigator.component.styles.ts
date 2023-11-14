import { ListItem, styled } from "@mui/material";
import { Link } from "react-scroll";

export const ListItemImage = styled("img")`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: 2px solid #fff;
    border-radius: 50%;
    margin-top: 8px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
`;

export const ListItemContentWrapper = styled("div")`
    text-align: center;
    margin-top: 16px;
    color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ListItemWrapper = styled(ListItem)`
    flex-direction: column;
`;

export const ScrollLinkWrapper = styled(Link)`
    flex-grow: 1;

    &.active {
        div {
            color: ${({ theme }) => theme.palette.primary.main};
        }
        div:first-child {
            background-color: rgba(255, 140, 5, 0.08)
        }
    }
`;
