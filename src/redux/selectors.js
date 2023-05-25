export const selectContactsList = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactsFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const contactItems = selectContactsList(state);
  const contactFilter = selectContactsFilter(state);

  const filteredContacts = contactItems.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(contactFilter.toLowerCase()) ||
      phone.includes(contactFilter)
  );

  return filteredContacts;
};
