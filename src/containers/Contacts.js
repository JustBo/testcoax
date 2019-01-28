import React, { Component } from 'react';

import classes from '../App.module.css';
import Button from "../components/UI/Button/index";
import Modal from "../components/UI/Modal/index";
import {bindActionCreators} from "redux";
import {addContact, updateContact, updateContactOrder} from "../actions";
import {connect} from "react-redux";
import ContactForm from "../components/ContactForm";
import {removeItem, insertItem, updateObject} from '../utilities'
import { initialize, destroy } from 'redux-form';

class Contacts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            draggable: null,
        };

        this.setDraggable = this.setDraggable.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setDraggable(key) {
        this.setState({
            draggable: key
        });
    }

    handleDragEnter(e, key) {
        let order = this.getOrder(this.props.contacts);
        let newOrder = Object.keys(order).map(item => order[item]);

        newOrder = removeItem(newOrder, { index: newOrder.indexOf(this.state.draggable) });
        newOrder = insertItem(newOrder, { index: Object.keys(order).map(item => order[item]).indexOf(key), item: this.state.draggable });

        let ret = newOrder.reduce((state, item, index) => ({
            ...state,
            [item]: index + 1
        }), {});
        this.props.updateContactOrder(ret);
    }

    getOrder(contacts) {
        return Object.keys(contacts).reduce((item, el) => ({...item, [contacts[el].orderId]: el}), {});
    }

    handleClose() {
        this.setState({
            modal: false
        });
    }

    handleShow() {
        this.props.reset();
        this.setState({
            modal: true
        });
    }

    handleSubmit(values) {
        if(values['id'] === undefined) {
            this.props.addContact(values);
        }else{
            this.props.updateContact(values);
        }
        this.handleClose();
    }

    handleContactClick(key) {
        this.setState({
            modal: true
        });
        this.props.initializeContact(updateObject(this.props.contacts[key], {
            id : key
        }));
    }

    render() {
        const order = this.getOrder(this.props.contacts);
        return (
            <div className={classes.textCenter}>
                <div className={classes.Container}>
                    {Object.keys(order).map(item => {
                        let contact = this.props.contacts[order[item]];
                        let disabled = this.state.draggable === order[item] ? classes.disabled : '';
                        return (
                            <div
                                key={order[item]}
                                draggable={true}
                                className={[classes.Item, disabled].join(" ")}
                                onDrag={() => this.setDraggable(order[item])}
                                onDragEnd={() => this.setDraggable(null)}
                                onDragEnter={(e) => this.handleDragEnter(e, order[item])}
                                onClick={() => this.handleContactClick(order[item])}
                            >
                                <div className={classes.NameField}>{contact.firstName} {contact.lastName}</div>
                                <div>{contact.phone}</div>
                                <div>{contact.email}</div>
                            </div>
                        );
                    })}
                </div>
                <Button onClick={this.handleShow}>
                    Add contact
                </Button>
                <Modal show={this.state.modal} modalClosed={this.handleClose}>
                    <ContactForm onSubmit={this.handleSubmit} data={this.props.form} />
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        form: state.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addContact,
        updateContact,
        updateContactOrder,
        reset: () => dispatch(destroy('contact')),
        initializeContact: contact => initialize('contact', contact)
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
