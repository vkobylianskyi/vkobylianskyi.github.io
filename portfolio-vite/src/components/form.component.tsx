import { useState, useEffect } from "react";
import { Grid, TextField, Snackbar, Alert, useTheme, useMediaQuery } from "@mui/material";
import validate from "validate.js";
import emailjs from "emailjs-com";
import { FormAction } from "./form.component.styles";
import { useTranslation } from "react-i18next";

const USER_ID = "E9qBwC1FPspiD-IyC";
const TEMPLATE_ID = "template_wgen6do";
const SERVICE_ID = "service_tsdld5b";

const schema = {
    firstName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 128,
        },
    },
    lastName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 128,
        },
    },
    subject: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 128,
        },
    },
    email: {
        presence: { allowEmpty: false, message: "is required" },
        email: true,
        length: {
            maximum: 128,
        },
    },
    message: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 1000,
        },
    },
};

type ContactFormTypes = {
    email?: string;
    subject?: string;
    lastName?: string;
    firstName?: string;
    message?: string;
};

interface FormErrors {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
}

interface FormState {
    isValid: boolean;
    values: ContactFormTypes;
    touched: Record<keyof ContactFormTypes, boolean>;
    errors: FormErrors;
}

const ContactForm: React.FC = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const theme = useTheme();
    const isTabletWide = useMediaQuery(theme.breakpoints.up("md"));

    const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const formElement = event.target as HTMLFormElement;
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formElement,
                USER_ID
            );
            setOpenSnackbar(true);
        } catch (error) {
            console.error("FAILED...", error);
        }

        setFormState((prevFormState: FormState) => ({
            ...prevFormState,
            isValid: false,
            values: {},
            touched: {
                email: false,
                subject: false,
                lastName: false,
                firstName: false,
                message: false,
            },
            errors: {},
        }));
    };

    const [formState, setFormState] = useState<FormState>({
        isValid: false,
        values: {},
        touched: {
            email: false,
            subject: false,
            lastName: false,
            firstName: false,
            message: false,
        },
        errors: {},
    });

    useEffect(() => {
        const errors = validate(formState.values, schema);

        setFormState((prevFormState) => ({
            ...prevFormState,
            isValid: !errors,
            errors: errors || {},
        }));
    }, [formState.values]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, type, value } = event.target;

        setFormState((prevFormState) => ({
            ...prevFormState,
            values: {
                ...prevFormState.values,
                [name]:
                    type === "checkbox"
                        ? (event as React.ChangeEvent<HTMLInputElement>).target
                              .checked
                        : value,
            },
            touched: {
                ...prevFormState.touched,
                [name]: true,
            },
        }));
    };

    const hasError = (field: keyof FormErrors) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    const [t] = useTranslation();

    return (
        <div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {t("formSuccessMessage")}
                </Alert>
            </Snackbar>
            <form
                encType="multipart/form-data"
                name="contact-form"
                onSubmit={sendEmail}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            placeholder={t("formFirstName")}
                            label={t("formFirstName")}
                            variant="standard"
                            size="medium"
                            name="firstName"
                            id="firstName"
                            fullWidth
                            helperText={
                                hasError("firstName")
                                    ? formState.errors.firstName
                                        ? formState.errors.firstName[0]
                                        : null
                                    : null
                            }
                            error={hasError("firstName")}
                            onChange={handleInputChange}
                            type="text"
                            value={formState.values.firstName || ""}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            placeholder={t("formLastName")}
                            label={t("formLastName")}
                            variant="standard"
                            size="medium"
                            name="lastName"
                            id="lastName"
                            fullWidth
                            helperText={
                                hasError("lastName")
                                    ? formState.errors.lastName
                                        ? formState.errors.lastName[0]
                                        : null
                                    : null
                            }
                            error={hasError("lastName")}
                            onChange={handleInputChange}
                            type="text"
                            value={formState.values.lastName || ""}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            placeholder={t("formLastEmail")}
                            label={t("formLastEmail")}
                            variant="standard"
                            size="medium"
                            name="email"
                            fullWidth
                            helperText={
                                hasError("email")
                                    ? formState.errors.email
                                        ? formState.errors.email[0]
                                        : null
                                    : null
                            }
                            error={hasError("email")}
                            onChange={handleInputChange}
                            type="email"
                            value={formState.values.email || ""}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            placeholder={t("formSubject")}
                            label={t("formSubject")}
                            variant="standard"
                            size="medium"
                            name="subject"
                            fullWidth
                            helperText={
                                hasError("subject")
                                    ? formState.errors.subject
                                        ? formState.errors.subject[0]
                                        : null
                                    : null
                            }
                            error={hasError("subject")}
                            onChange={handleInputChange}
                            type="text"
                            value={formState.values.subject || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder={t("formMessage")}
                            label={t("formMessage")}
                            variant="standard"
                            size="medium"
                            name="message"
                            rows={isTabletWide ? 11 : 5}
                            multiline
                            fullWidth
                            helperText={
                                hasError("message")
                                    ? formState.errors.message
                                        ? formState.errors.message[0]
                                        : null
                                    : null
                            }
                            error={hasError("message")}
                            onChange={handleInputChange}
                            type="text"
                            value={formState.values.message || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormAction
                            size="large"
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={!formState.isValid}
                        >
                            {t("formButtonTitle")}
                        </FormAction>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ContactForm;
