import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import reducers from './reducers';

import './Index.scss';

import Dashboard from './components/Dashboard';
import LearningBoard from './components/LearningBoard';
import BaseModal from './components/modal/BaseModal';

const store = createStore(reducers);

// // Set initial app load store snapshot
// let storeSnapshot = store.getState();

// // Subscribe to changes to the store
// store.subscribe(() => {
//   const previousState = storeSnapshot;
//   const currentState = (storeSnapshot = store.getState());

//   console.log('prev:', previousState);
//   console.log('current:', currentState);
// });

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/board" exact component={LearningBoard} />
          <Redirect to="/dashboard" />
        </Switch>
        <BaseModal />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
