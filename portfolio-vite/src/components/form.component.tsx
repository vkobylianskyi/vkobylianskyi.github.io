import { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import validate from "validate.js";
import emailjs from "emailjs-com";

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

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((res) => console.log("SUCCESS!", res.status, res.text))
            .catch((error) => console.log("FAILED...", error));

        setFormState((formState) => ({
            ...formState,
            isValid: false,
            values: {},
            touched: {},
            errors: {},
        }));
    };

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {
        const errors = validate(formState.values, schema);

        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

    const handleChange = (e) => {
        e.persist();

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [e.target.name]:
                    e.target.type === "checkbox"
                        ? e.target.checked
                        : e.target.value,
            },
            touched: {
                ...formState.touched,
                [e.target.name]: true,
            },
        }));
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <div>
            <form
                headers="application/json"
                name="contact-form"
                onSubmit={sendEmail}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            placeholder="First name"
                            label="First name"
                            variant="standard"
                            size="medium"
                            name="firstName"
                            id="firstName"
                            fullWidth
                            helperText={
                                hasError("firstName")
                                    ? formState.errors.firstName[0]
                                    : null
                            }
                            error={hasError("firstName")}
                            onChange={handleChange}
                            type="text"
                            value={formState.values.firstName || ""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            placeholder="Last name"
                            label="Last name"
                            variant="standard"
                            size="medium"
                            name="lastName"
                            id="lastName"
                            fullWidth
                            helperText={
                                hasError("lastName")
                                    ? formState.errors.lastName[0]
                                    : null
                            }
                            error={hasError("lastName")}
                            onChange={handleChange}
                            type="text"
                            value={formState.values.lastName || ""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            placeholder="Email Address"
                            label="Email Address"
                            variant="standard"
                            size="medium"
                            name="email"
                            fullWidth
                            helperText={
                                hasError("email")
                                    ? formState.errors.email[0]
                                    : null
                            }
                            error={hasError("email")}
                            onChange={handleChange}
                            type="email"
                            value={formState.values.email || ""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            placeholder="Subject"
                            label="Subject"
                            variant="standard"
                            size="medium"
                            name="subject"
                            fullWidth
                            helperText={
                                hasError("subject")
                                    ? formState.errors.subject[0]
                                    : null
                            }
                            error={hasError("subject")}
                            onChange={handleChange}
                            type="text"
                            value={formState.values.subject || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Message"
                            label="Message"
                            variant="standard"
                            size="medium"
                            name="message"
                            rows={5}
                            multiline
                            fullWidth
                            helperText={
                                hasError("message")
                                    ? formState.errors.message[0]
                                    : null
                            }
                            error={hasError("message")}
                            onChange={handleChange}
                            type="text"
                            value={formState.values.message || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            size="large"
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={!formState.isValid}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ContactForm;
