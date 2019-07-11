import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { openDrawer, closeDrawer } from '../../actions/drawerActions';
import { AppState } from '../../reducers';

interface AppDrawerProps {
  drawerOpen: boolean;
  openDrawer(): void;
  closeDrawer(): void;
}

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const AppDrawer = ({ closeDrawer, openDrawer, drawerOpen }: AppDrawerProps) => {
  const classes = useStyles();

  const renderMenuItems = () => (
    <div className={classes.list} role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <SwipeableDrawer open={drawerOpen} onClose={closeDrawer} onOpen={openDrawer}>
      {renderMenuItems()}
    </SwipeableDrawer>
  );
};

const mapState = (state: AppState) => {
  return {
    drawerOpen: state.drawer.open
  };
};

const mapDispatch = {
  openDrawer,
  closeDrawer
};

export default connect(
  mapState,
  mapDispatch
)(AppDrawer);
