import * as React from "react";

import { CopyWrapper } from "./copy.component.styles.ts";
import { Container, Typography } from "@mui/material";

export default function Copy() {
    return (
        <Container>
            <CopyWrapper>
                <Typography
                    variant="body2"
                    color="white"
                    align="center"
                >
                    {"Copyright © All Right Reserved "}
                    {new Date().getFullYear()}.
                </Typography>
            </CopyWrapper>
        </Container>
    );
}
