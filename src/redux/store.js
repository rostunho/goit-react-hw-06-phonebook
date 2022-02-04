import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts/contacts-reduser';

// console.log(rootReducer);

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
