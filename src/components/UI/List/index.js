import React, { Component } from 'react';

import classes from './List.module.css';
import { Redirect } from 'react-router-dom';
import Badge from "../Badge/index";

export class List extends Component {
    render() {
        return (
            <div className={classes.list}>
                {this.props.children}
            </div>
        );
    }
}

export class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.navigateble && this.props.to) {
            this.setState({
                redirect: true
            });
        }
    }

    render() {
        if(this.props.navigateble && this.state.redirect) {
            return <Redirect to={this.props.to} />
        }
        const classNames = [classes.listItem];
        if(this.props.navigateble) {
            classNames.push(classes.navigate);
        }
        return (
            <div
                className={classNames.join(" ")}
            >
                <div className={classes.title} onClick={this.handleClick}>{this.props.title}</div>
                {this.props.badge &&
                    <Badge>{this.props.badge}</Badge>
                }
                {this.props.deleteable &&
                    <div className={classes.deleteButton} onClick={this.props.onDelete}>
                        Delete
                    </div>
                }
            </div>
        );
    }
}
