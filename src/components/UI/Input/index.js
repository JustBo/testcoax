import React, { Component } from 'react';

import classes from './Input.module.css';

export default class Input extends Component {
    render() {
        return (
            <input className={classes.input} {...this.props} />
        );
    }
}
