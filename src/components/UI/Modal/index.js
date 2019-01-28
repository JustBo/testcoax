import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop';

class Modal extends Component {

    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'scale(1)' : 'scale(0)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;
