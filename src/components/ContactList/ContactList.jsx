import { ContList, ContItem, ContButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContList>
      {contacts.map(contact => (
        <ContItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContButton onClick={() => onDeleteContact(contact.id)}>Delete</ContButton>
        </ContItem>
      ))}
    </ContList>
  );
};

export default ContactList;
