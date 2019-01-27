import React, { Component } from 'react';

import classes from './Form.module.css';

export default class Form extends Component {
    render() {
        return (
            <form {...this.props} className={classes.form}>
                {this.props.children}
            </form>
        );
    }
}
