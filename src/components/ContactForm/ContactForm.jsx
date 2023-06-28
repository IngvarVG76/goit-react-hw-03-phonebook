import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          required
          value={name}
          onChange={this.handleChange}
        />

        <FormLabel htmlFor="number">Number:</FormLabel>
        <FormInput
          type="tel"
          id="number"
          name="number"
          placeholder="Enter number"
          required
          value={number}
          onChange={this.handleChange}
        />

        <FormBtn type="submit">Add Contact</FormBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
