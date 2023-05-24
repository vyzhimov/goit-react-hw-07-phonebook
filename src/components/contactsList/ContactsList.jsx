import { useSelector, useDispatch } from 'react-redux';
import { getContactsList, getContactsFilter } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';

import IsLoading from 'components/IsLoading';
import Error from 'components/Error';
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
    ({ name, phone }) =>
      name.toLowerCase().includes(filteredValue.toLowerCase()) ||
      phone.includes(filteredValue)
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    console.log(id);
  };

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <Error />}
      {!isLoading && !error && (
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

                <DeleteBtn onClick={() => handleDeleteContact(id)}>
                  <RiDeleteBin3Line fill="currentColor" size="1.2rem" />
                  Delete
                </DeleteBtn>
              </ContactItem>
            );
          })}
        </ContactList>
      )}
    </>
  );
}
