import {
    Box,
    Grid,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
    styled,
} from "@mui/material";

import Slider from "react-slick";

export const ExperienceWrapper = styled(Box)`
    padding: 40px;
    background-color: #262626;
    margin-top: 40px;
    border-radius: 5px;
    gap: 16px;
    flex-wrap: nowrap;
`;

export const ExperienceGridWrapper = styled(Grid)`
    align-items: flex-start;
    gap: 16px;
`;

export const ExperienceTitle = styled(Typography)`
    font-size: 50px;
    line-height: 110%;
    font-weight: 900;
    margin-bottom: 30px;
    color: #ffffff;
`;

export const ExperienceSubtitle = styled(Typography)`
    font-size: 16px;
    line-height: 27px;
    color: #ffffff;
`;

export const ExperienceDate = styled(Typography)`
    font-size: 16px;
    line-height: 27px;
    color: #ffffff;
`;

export const ExperienceImage = styled("img")`
    width: 100%;
`;

export const ExperienceSliderItemWrapper = styled(Box)`
`;

export const ExperienceList = styled(List)``;

export const ExperienceListItemIcon = styled(ListItemIcon)``;

export const ExperienceListItemText = styled(ListItemText)``;

export const ExperienceListItemCircle = styled("div")`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff8c05;
`;

export const ExperienceSliderWrapper = styled(Slider)`

.slick-dots {
    margin-top: 30px;
    position: static;
}

.slick-dots li.slick-active button:before {
    color: #ff8c05;
}

.slick-dots li button:before {
    font-size: 12px;
    color: #515151;
    opacity: inherit;
}
`