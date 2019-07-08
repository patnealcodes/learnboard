import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Modal, WithStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import { AppState } from '../../reducers';
import { openModal, closeModal } from '../../actions/modalActions';

interface BaseModalProps {
  classes: WithStyles;
  modalOpen: boolean;
  modalContent: string | boolean;
  openModal?(): void;
  closeModal(): void;
}

const styles = ({ palette, shadows, spacing }: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: palette.background.paper,
      boxShadow: shadows[5],
      maxWidth: 400,
      outline: 'none',
      margin: `${spacing(4)}px 0 0`,
      padding: spacing(4),
      position: 'absolute',
      width: '100%'
    }
  });

const BaseModal = withStyles(styles)((props: any) => {
  const { classes } = props;

  function renderModalContent() {
    switch (props.modalContent) {
      case '1':
        return <div>Uno</div>;
      case '2':
        return <div>Dos</div>;
      case '3':
        return <div>Tres</div>;
      default:
        return <div>Nada</div>;
    }
  }

  return (
    <div>
      <Modal className={classes.modal} aria-labelledby="Base Modal" aria-describedby="Base Modal Description" open={props.modalOpen} onClose={props.closeModal}>
        <div className={classes.paper}>{renderModalContent()}</div>
      </Modal>
    </div>
  );
});

const mapState = (state: AppState) => ({
  modalOpen: state.modal.open,
  modalContent: state.modal.contentId
});

const mapDispatch = {
  openModal,
  closeModal
};

export default connect(
  mapState,
  mapDispatch
)(BaseModal);
