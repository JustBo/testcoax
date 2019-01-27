import React, { Component } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import {fetchContacts} from "./actions";
import Contacts from "./containers/Contacts";

const store = createStore(reducers);

store.subscribe(function () {
  localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
});

store.dispatch(fetchContacts());

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={Contacts} />
          </Switch>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
