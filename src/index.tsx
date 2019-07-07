import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import './Index.scss';

import AppToolbar from './components/app-toolbar/AppToolbar';
import AppDrawer from './components/app-drawer/AppDrawer';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <AppToolbar />
      <AppDrawer />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
