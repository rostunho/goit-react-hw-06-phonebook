import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addNewContactAction,
  removeContactAction,
  contactsFilterAction,
} from './contacts-actions';

const contactsReducer = createReducer([], {
  [addNewContactAction]: (state, { payload }) => [payload, ...state],
  [removeContactAction]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [contactsFilterAction]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
