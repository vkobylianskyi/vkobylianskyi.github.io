import {
    Box,
    Grid,
    Typography,
    styled,
} from "@mui/material";

export const EducationWrapper = styled(Box)`
    padding: 40px;
    background-color: #262626;
    margin-top: 40px;
    border-radius: 5px;
    gap: 16px;
    flex-wrap: nowrap;
`;

export const EducationGrid = styled(Grid)`
&:last-of-type {
    margin-top: 0;
}
`

export const EducationIcon = styled("img")`
    width: 100%;
    border-radius: 50%;
    border: 10px solid #fff;
`;

export const EducationTitle = styled(Typography)`
    font-size: 22px;
    line-height: 30px;
    padding-bottom: 8px;
    color: #ff8c05;
`;

export const EducationSubtitle = styled(Typography)`
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 8px;
    color: #ffffff;
`;

export const EducationDate = styled(Typography)`
    font-size: 16px;
    line-height: 27px;
    color: #ffffff;
`;