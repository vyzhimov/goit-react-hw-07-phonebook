import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/selectors';
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
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
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
