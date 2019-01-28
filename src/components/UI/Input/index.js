import React, { Component } from 'react';

import classes from './Input.module.css';

export default class Input extends Component {
    render() {
        const {
            input: { value, onChange }
        } = this.props;
        return (
            <input value={value} onChange={onChange} className={classes.input} {...this.props} />
        );
    }
}
