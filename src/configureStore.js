import { createStore } from 'redux';

import rootReducer from './reducers';
import {fetchContacts} from "./actions";

export const configureStore = () => {
    const store = createStore(rootReducer);

    store.subscribe(function () {
        localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
    });

    store.dispatch(fetchContacts());

    return store;
}