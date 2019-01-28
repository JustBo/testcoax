import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ContactReducer from './reducer_contacts';

const rootReducer = combineReducers({
    contacts: ContactReducer,
    form: formReducer
});

export default rootReducer;
