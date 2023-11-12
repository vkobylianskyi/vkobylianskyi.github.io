import { CopyWrapper, CopyText } from "./copy.component.styles.ts";
import { Container } from "@mui/material";

export default function Copy() {
    return (
        <Container>
            <CopyWrapper>
                <CopyText
                    variant="body2"
                    color="white"
                    align="center"
                >
                    {"Copyright © All Right Reserved "}
                    {new Date().getFullYear()}.
                </CopyText>
            </CopyWrapper>
        </Container>
    );
}
