import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

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
    CardFlipItemSubtitle,
} from "./card-flip.component.styles.ts";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";

export type CardFlipProps = {
    background: string;
    backSide?: {
        title: string | React.ReactNode;
        description: string | React.ReactNode;
    };
    href: string;
    codeLink?: string;
};

export const CardFlip: React.FC<CardFlipProps> = ({
    background,
    backSide,
    href,
    codeLink,
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
                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            flexWrap="wrap"
                        >
                            <Button
                                sx={{ width: 80, justifyContent: "flex-Start" }}
                                startIcon={<PublicIcon />}
                                href={href}
                                target="_blank"
                                size="small"
                                variant="outlined"
                            >
                                <span>{t("projectsSiteLinkTitle")}</span>
                            </Button>
                            {codeLink && (
                                <Button
                                    sx={{
                                        width: 80,
                                        justifyContent: "flex-Start",
                                    }}
                                    href={codeLink}
                                    startIcon={<GitHubIcon />}
                                    target="_blank"
                                    size="small"
                                    variant="outlined"
                                >
                                    <span>{t("projectCodeLinkTitle")}</span>
                                </Button>
                            )}
                        </Stack>
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
