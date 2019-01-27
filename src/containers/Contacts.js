import React, { Component } from 'react';

import classes from '../App.module.css';
import Button from "../components/UI/Button/index";
import Modal from "../components/UI/Modal/index";
import {bindActionCreators} from "redux";
import {addContact, updateContact} from "../actions";
import {connect} from "react-redux";
import ContactForm from "./ContactForm";
import {removeItem, insertItem} from '../utilities'

class Contacts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            draggable: {
                key: null
            }
        };

        this.handleEnd = this.handleEnd.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleDrag(e, key) {
        this.setState({
            draggable: {
                key: key,
            }
        });
    }

    handleEnd(e) {
        this.setState({
            draggable: {
                key: null
            }
        });
    }

    handleDragEnter(e, key) {
        let order = this.getOrder(this.props.contacts);
        let newOrder = Object.keys(order).map(item => order[item]);

        newOrder = removeItem(newOrder, { index: newOrder.indexOf(this.state.draggable.key) });
        newOrder = insertItem(newOrder, { index: Object.keys(order).map(item => order[item]).indexOf(key), item: this.state.draggable.key });

        let ret = newOrder.reduce((state, item, index) => ({
            ...state,
            [item]: index + 1
        }), {});
        this.props.updateContact(ret);
    }

    getOrder(contacts) {
        // return orderid : contactid
        return Object.keys(contacts).reduce((item, el) => ({...item, [contacts[el].orderId]: el}), {});
    }

    handleClose() {
        this.setState({
            modal: false
        });
    }

    handleShow() {
        this.setState({
            modal: true
        });
    }

    render() {
        const order = this.getOrder(this.props.contacts);
        // console.log(order);
        // console.log(this.props.contacts);
        return (
            <div>
                <div className={classes.Container}>
                    {Object.keys(order).map(item => {
                        let contact = this.props.contacts[order[item]];
                        let disabled = this.state.draggable.key === order[item] ? classes.disabled : '';
                        return (
                            <div
                                key={order[item]}
                                draggable={true}
                                className={[classes.Item, disabled].join(" ")}
                                onDrag={(e) => this.handleDrag(e, order[item])}
                                onDragEnd={this.handleEnd}
                                onDragEnter={(e) => this.handleDragEnter(e, order[item])}
                            >
                                {contact.firstName}
                            </div>
                        );
                    })}
                </div>
                <Button onClick={this.handleShow}>
                    Add contact
                </Button>
                <Modal show={this.state.modal} modalClosed={this.handleClose}>
                    <ContactForm />
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addContact, updateContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
