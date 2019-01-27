import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        // console.log('[Index] WillUpdate');
    }

    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        // height: this.props.show ? 'auto' : 0,
                        // width: this.props.show ? 'auto' : 0,
                        zIndex: this.props.show ? '500' : '-1',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;
