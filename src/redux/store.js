import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
