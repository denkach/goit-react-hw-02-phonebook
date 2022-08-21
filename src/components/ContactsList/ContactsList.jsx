import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Contacts,
  ContactsItem,
  Label,
  ContactsButton,
  ContactContainer,
} from './ContactsList.styled';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';

export class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
        <Contacts>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id}>
                <Label>
                  <ContactContainer>
                    <RiContactsFill style={{ marginRight: '8px' }} />
                    {name}: {number}
                  </ContactContainer>
                  <ContactsButton id={id} onClick={this.props.onClick}>
                    <AiFillDelete />
                  </ContactsButton>
                </Label>
              </ContactsItem>
            );
          })}
        </Contacts>
      </>
    );
  }
}
