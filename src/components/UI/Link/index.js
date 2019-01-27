import React, { Component } from 'react';

import classes from './Link.module.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <Link {...this.props} className={[classes.link, classes[this.props.type]].join(' ')}>
                {this.props.children}
            </Link>
        );
    }
}
