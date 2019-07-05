import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Index.scss';

import AppToolbar from './components/app-toolbar/AppToolbar';
import AppDrawer from './components/app-drawer/AppDrawer';

const App = () => {
  const [drawerState, setDrawer] = useState({ open: false });
  const toggleDrawer = (toggleState?: boolean) => {
    const open = toggleState !== undefined ? toggleState : !drawerState.open;

    setDrawer({ ...drawerState, open });
  };

  return (
    <div>
      <AppToolbar toggleDrawer={toggleDrawer} />
      <AppDrawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
