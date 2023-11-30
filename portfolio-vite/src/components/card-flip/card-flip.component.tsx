import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import {
    CardFlipInner,
    CardFlipWrapper,
    CardFlipItemFrontSide,
    CardFlipItemTitle,
    CardFlipItemImage,
    CardFlipItemButton,
    CardFlipItemBackSide,
    CardFlipItemBackDescription,
    CardFlipItemButtonsWrapper,
    CardFlipItemTryNow,
    CardFlipItemSubtitle,
} from "./card-flip.component.styles.ts";
import { useTranslation } from "react-i18next";

export type CardFlipProps = {
    background: string;
    backSide?: {
        title: string | React.ReactNode;
        description: string | React.ReactNode;
    };
    href: string;
    isCodeLink: string;
};

export const CardFlip: React.FC<CardFlipProps> = ({
    background,
    backSide,
    href,
    isCodeLink,
}) => {
    const [rotate, setRotate] = React.useState(false);

    const toggleRotate = () => {
        setRotate((prev) => !prev);
    };

    const [t] = useTranslation();

    return (
        <CardFlipWrapper>
            <CardFlipInner rotate={rotate}>
                <CardFlipItemFrontSide onClick={toggleRotate} visible={rotate}>
                    <CardFlipItemImage
                        className={"flip-cards__flip-card-image"}
                        background={background}
                    />
                    <CardFlipItemButton active={false}>
                        <AddIcon />
                    </CardFlipItemButton>
                </CardFlipItemFrontSide>
                <CardFlipItemBackSide visible={rotate}>
                    <CardFlipItemTitle>
                        {backSide && backSide.title}
                    </CardFlipItemTitle>
                    <CardFlipItemSubtitle>
                        {t("projectsTechnologies")}
                    </CardFlipItemSubtitle>
                    <CardFlipItemBackDescription>
                        {backSide && backSide.description}
                    </CardFlipItemBackDescription>
                    <CardFlipItemButtonsWrapper visible={rotate}>
                        <div>
                            <CardFlipItemTryNow
                                fontWeight={600}
                                href={href}
                                target="_blank"
                            >
                                <span>{t("projectsSiteLinkTitle")}</span>
                                <KeyboardArrowRightIcon />
                            </CardFlipItemTryNow>
                            {isCodeLink && (
                                <CardFlipItemTryNow
                                    fontWeight={600}
                                    href={isCodeLink}
                                    target="_blank"
                                >
                                    <span>{t("projectCodeLinkTitle")}</span>
                                    <KeyboardArrowRightIcon />
                                </CardFlipItemTryNow>
                            )}
                        </div>
                        <CardFlipItemButton
                            active={rotate}
                            onClick={toggleRotate}
                        >
                            <CloseIcon />
                        </CardFlipItemButton>
                    </CardFlipItemButtonsWrapper>
                </CardFlipItemBackSide>
            </CardFlipInner>
        </CardFlipWrapper>
    );
};
