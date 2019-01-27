import React, {Component} from 'react';
import Form from "../components/UI/Form/index";
import PropTypes from 'prop-types';
import Input from "../components/UI/Input/index";
import Button from "../components/UI/Button/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addContact} from "../actions";

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            values: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        this.setState({
            values: {
                ...this.state.values,
                [key] : e.target.value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.addContact(this.state.values);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {Object.keys(this.state.values).map(item => (
                    <Input
                        key={item}
                        value={this.state.values[item]}
                        onChange={e => this.handleChange(e, item)}
                    />
                ))}
                <Button>
                    Add contact
                </Button>
            </Form>
        );
    }
}

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
