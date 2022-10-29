import {
  ContactsListStyled,
  ContactsItemStyled,
  ButtonStyle,
  TextStyle,
} from './Contacts.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ContactList(props) {
  return (
    <div>
      <ContactsListStyled>
        {props.allContacts.map(obj => (
          <ContactsItemStyled key={nanoid(4)}>
            <TextStyle>
              {obj.name}: {obj.number}
            </TextStyle>
            <ButtonStyle type="button" onClick={() => props.onDelete(obj.name)}>
              Delete
            </ButtonStyle>
          </ContactsItemStyled>
        ))}
      </ContactsListStyled>
    </div>
  );
}

export default ContactList;

ContactList.propTypes = {
  allContacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
