import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, enhancer);
