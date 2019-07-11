import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import reducers from './reducers';

import './Index.scss';

import Dashboard from './components/Dashboard';
import LearningBoard from './components/LearningBoard';
import BaseModal from './components/modal/BaseModal';

import initializeLocalStorage from './services/initializeLocalStorage';

const store = createStore(reducers);

// Setup functionality to sync projectList from reduxStore to localStorage
initializeLocalStorage(store);

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" style={{ padding: '20px' }}>
        <Router>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/board/:id" exact component={LearningBoard} />
            <Redirect to="/dashboard" />
          </Switch>
          <BaseModal />
        </Router>
      </Container>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
