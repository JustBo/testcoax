import React from 'react';

import { Field, reduxForm } from 'redux-form';

import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";

import classes from "../App.module.css";

let ContactForm = props => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <div className={classes.formItem}>
                <label htmlFor="firstName">First Name:</label>
                <Field name="firstName" component={Input} type="text" />
            </div>
            <div className={classes.formItem}>
                <label htmlFor="lastName">Last Name:</label>
                <Field name="lastName" component={Input} type="text" />
            </div>
            <div className={classes.formItem}>
                <label htmlFor="phone">Phone:</label>
                <Field name="phone" component={Input} type="text" />
            </div>
            <div className={classes.formItem}>
                <label htmlFor="email">E-mail:</label>
                <Field name="email" component={Input} type="email" />
            </div>
            <Button>
                Save Contact
            </Button>
        </Form>
    )
};

export default reduxForm({
    form: 'contact',
    updateUnregisteredFields: true
})(ContactForm);
