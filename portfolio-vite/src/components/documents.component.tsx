import {
    DocumentsWrapper,
    DocumentsTitle,
    DocumentsLink,
} from "./documents.component.styles.ts";
import { Stack, Container, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

import cvDocument from "../assets/CV_Volodymyr_Kobylianskyi_Front-end.pdf";
import recommendationLetter from "../assets/Reference_Letter _Volodymyr_Kobylianskyi_Front-end.pdf";
import diplomaDocument from "../assets/Bachelor_diploma_Volodymyr_Kobylianskyi_Front-end.pdf";

export default function Document() {
    const [t] = useTranslation();

    const contactList = [
        {
            link: cvDocument,
            text: "documentsCV",
        },
        {
            link: recommendationLetter,
            text: "documentsRecommendationLetter",
        },
        {
            link: diplomaDocument,
            text: "documentsDiploma",
        },
    ];

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Container id="documentsSection">
            <DocumentsWrapper>
                <DocumentsTitle variant="h2" align="center">
                    {t("documentsTitle")}
                </DocumentsTitle>
                <Stack
                    direction="row"
                    justifyContent="center"
                    useFlexGap
                    alignItems="center"
                    flexWrap="wrap"
                    spacing={isDesktop ? 5 : 3}
                >
                    {contactList.map((contactListItem, index) => (
                        <DocumentsLink
                            variant="h6"
                            key={index}
                            target="_blank"
                            href={contactListItem.link}
                        >
                            {t(contactListItem.text)}
                        </DocumentsLink>
                    ))}
                </Stack>
            </DocumentsWrapper>
        </Container>
    );
}
