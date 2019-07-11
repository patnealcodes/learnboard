import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { openDrawer, closeDrawer } from '../../actions/drawerActions';
import { openModal, ModalType } from '../../actions/modalActions';
import { AppState } from '../../reducers';

interface AppToolbarProps {
  drawerOpen: boolean;
  openDrawer(): void;
  closeDrawer(): void;
  openModal(arg0: ModalType): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const AppToolbar = ({ drawerOpen, closeDrawer, openDrawer, openModal }: AppToolbarProps) => {
  const classes = useStyles();

  function toggleDrawer() {
    drawerOpen ? closeDrawer() : openDrawer();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            LearnBoard
          </Typography>
          <Button color="inherit" onClick={() => openModal('import')}>
            Import
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapState = (state: AppState) => ({
  drawerOpen: state.drawer.open
});

const mapDispatch = {
  openDrawer,
  closeDrawer,
  openModal
};

export default connect(
  mapState,
  mapDispatch
)(AppToolbar);
