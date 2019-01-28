import React from 'react';

import {Field, reduxForm} from 'redux-form';

import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";

import classes from "../App.module.css";

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    } else if (/\d[+]/g.test(values.phone)) {
        errors.phone = 'Invalid phone number';
    }
    console.log(errors);
    return errors;
};

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <div className={classes.formItem}>
            <label>{label}</label>
            <Input {...input} type={type}/>
        </div>
        <div className={classes.errorInput}>
            {touched && (error && <span>{error}</span>)}
        </div>
    </div>
);

const ContactForm = props => {
    const {handleSubmit} = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="firstName" component={renderField} type="text" label="First Name"/>
            <Field name="lastName" component={renderField} type="text" label="Last Name"/>
            <Field name="phone" component={renderField} type="text" label="Phone"/>
            <Field name="email" component={renderField} type="email" label="E-mail"/>
            <Button disabled={props.invalid || props.submitting || props.pristine}>Save Contact</Button>
        </Form>
    )
};

export default reduxForm({
    form: 'contact',
    validate
})(ContactForm);
