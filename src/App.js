import React, { Component } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import {configureStore} from "./configureStore";
import Contacts from "./containers/Contacts";

const store = configureStore();

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
