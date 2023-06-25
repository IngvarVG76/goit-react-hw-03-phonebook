// import React, { useState } from 'react'; // Solutions with React hooks
import React, { Component } from 'react';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
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
          onChange={this.handleNameChange}
        />

        <FormLabel htmlFor="number">Number:</FormLabel>
        <FormInput
          type="tel"
          id="number"
          name="number"
          placeholder="Enter number"
          required
          value={number}
          onChange={this.handleNumberChange}
        />

        <FormBtn type="submit">Add Contact</FormBtn>
      </Form>
    );
  }
}

// Solutions with React hooks
// const ContactForm = ({ onAddContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = event => {
//     setNumber(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     onAddContact(name, number);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         placeholder="Enter name"
//         required
//         value={name}
//         onChange={handleNameChange}
//       />

//       <label htmlFor="number">Number:</label>
//       <input
//         type="tel"
//         id="number"
//         name="number"
//         placeholder="Enter number"
//         required
//         value={number}
//         onChange={handleNumberChange}
//       />

//       <button type="submit">Add Contact</button>
//     </form>
//   );
// };

export default ContactForm;
