import React from 'react';

import classes from './Form.module.css';

const Form = (props) => (
    <form {...props} className={classes.form}>
        {props.children}
    </form>
);

export default Form;