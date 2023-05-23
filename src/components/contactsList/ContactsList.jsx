import { useSelector, useDispatch } from 'react-redux';
import { getContactsList, getContactsFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';

import { RiDeleteBin3Line } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs';
import { GiRotaryPhone } from 'react-icons/gi';

import {
  ContactList,
  ContactItem,
  ContactCard,
  DeleteBtn,
  ContactInfo,
} from './ContactList.styled';
import { useEffect } from 'react';

export default function ContactsList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContactsList);
  const filteredValue = useSelector(getContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filteredValue.toLowerCase()) ||
      number.includes(filteredValue)
  );

  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <ContactList>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem key={id}>
            <ContactCard>
              <ContactInfo>
                <BsPersonCircle />
                {name}
              </ContactInfo>
              <ContactInfo>
                <GiRotaryPhone />
                {phone}
              </ContactInfo>
            </ContactCard>

            <DeleteBtn>
              <RiDeleteBin3Line fill="currentColor" size="1.2rem" />
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactList>
  );
}
