import { css, styled } from '@mui/material';

export const CarouselWrapper = styled('div')`
    overflow: hidden;
    position: relative;
    cursor: default;
`;

export const CarouselContainer = styled('div')`
    display: flex;
`;

export const CarouselSlide = styled('div')`
    flex: 0 0 100%;
    min-width: 0;
`;

export const CarouselDots = styled('div')`
    position: absolute;
    display: flex;
    list-style: none;
    padding-left: 0;
    justify-content: center;
    left: 0;
    right: 0;
    bottom: 20px;
`;

export const CarouselDotsButton = styled('button') <{ selected: boolean }>`
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    margin-left: 8px;
    border: 0;
    display: flex;
    align-items: center;

    &::after {
        background-color: ${({ theme }) => theme.palette.divider};
        width: 100%;
        height: 8px;
        content: '';
        border-radius: 50%;

        ${({ selected, theme }) =>
        selected &&
        css`
                background-color: ${theme.palette.primary.main};
                opacity: 1;
            `}
    }
`;
