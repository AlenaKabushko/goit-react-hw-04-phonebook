import { useState } from 'react';
import { FormStyle, LabelStyle, InputStyle, ButtonStyle } from './Form.styled';
import PropTypes from 'prop-types';

export function FormInput({ formData }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const formSubmit = e => {
    e.preventDefault();
    formData({ name, number });
    formReset();
  };

  return (
    <>
      <FormStyle onSubmit={formSubmit}>
        <LabelStyle>
          Name
          <InputStyle
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={inputChange}
            required
          />
        </LabelStyle>
        <LabelStyle>
          Number
          <InputStyle
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputChange}
            required
          />
        </LabelStyle>
        <ButtonStyle type="submit">Add contact</ButtonStyle>
      </FormStyle>
    </>
  );
}

FormInput.propTypes = {
  formData: PropTypes.func.isRequired,
};
