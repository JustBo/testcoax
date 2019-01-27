import { combineReducers } from 'redux';

import ContactReducer from './reducer_contacts';

const rootReducer = combineReducers({
  contacts: ContactReducer
});

export default rootReducer;
