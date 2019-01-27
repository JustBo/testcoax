import React, { Component } from 'react';

import classes from './Badge.module.css';

export default class Badge extends Component {
    render() {
        return (
            <div {...this.props} className={classes.badge}>
                {this.props.children}
            </div>
        );
    }
}
