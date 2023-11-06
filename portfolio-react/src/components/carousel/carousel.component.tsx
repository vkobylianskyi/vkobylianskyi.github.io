import React from 'react';
import {
    CarouselContainer,
    CarouselDots,
    CarouselDotsButton,
    CarouselSlide,
    CarouselWrapper,
} from './carousel.component.styles';
import { ChildrenProps, CommonProps } from '../../utils/jsx.utils';
import useEmblaCarousel from 'embla-carousel-react';

export type CarouselProps = CommonProps &
    ChildrenProps & {
        slidesToScroll?: number;
        draggable?: boolean;
        infinityScroll?: boolean;
        startIndex?: number;
        withDots?: boolean;
        withControlButtons?: boolean;
        align?: 'start' | 'center' | 'end' | number;
    };

export const Carousel: React.FC<CarouselProps> = ({
    slidesToScroll = 1,
    draggable = true,
    infinityScroll = false,
    startIndex = 1,
    withControlButtons = true,
    withDots = true,
    children,
    align = 'center',
    ...commonProps
}) => {
    const [carouselRef, carouselMethods] = useEmblaCarousel({
        slidesToScroll,
        startIndex,
        loop: infinityScroll,
        draggable,
        align,
    });
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollTo = React.useCallback(
        (index) => carouselMethods?.scrollTo(index),
        [carouselMethods],
    );

    React.useEffect(() => {
        const onSelect = () => {
            setSelectedIndex(carouselMethods?.selectedScrollSnap() || 0);
        };
        if (carouselMethods) {
            setScrollSnaps(carouselMethods.scrollSnapList());
            carouselMethods.on('select', onSelect);
            onSelect();
        }
    }, [carouselMethods]);

    return (
        <CarouselWrapper {...commonProps} ref={carouselRef}>
            <CarouselContainer>
                {React.Children.toArray(children).map((child, index) => (
                    <CarouselSlide key={index}>{child}</CarouselSlide>
                ))}
            </CarouselContainer>
            {withDots && (
                <CarouselDots>
                    {scrollSnaps.map((_snap, index) => (
                        <CarouselDotsButton
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                            key={index}
                        />
                    ))}
                </CarouselDots>
            )}
        </CarouselWrapper>
    );
};

Carousel.displayName = 'Carousel';
