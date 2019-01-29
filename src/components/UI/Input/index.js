import React, { Component } from 'react';

import classes from './Input.module.css';

const Input = (props) => (
    <input className={classes.input} {...props} />
);

export default Input;
