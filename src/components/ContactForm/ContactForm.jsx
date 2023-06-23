import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name"
        required
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="number">Number:</label>
      <input
        type="tel"
        id="number"
        name="number"
        placeholder="Enter number"
        required
        value={number}
        onChange={handleNumberChange}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
