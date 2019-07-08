import React from 'react';
import { Modal, WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import { connect } from 'react-redux';

import { AppState } from '../../reducers';
import { closeModal, ModalType } from '../../actions/modalActions';

interface BaseModalProps extends WithStyles {
  modalOpen: boolean;
  modalContent: ModalType;
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

const BaseModal = withStyles(styles)((props: BaseModalProps) => {
  const { classes } = props;

  function renderModalContent() {
    switch (props.modalContent) {
      case 'import':
        return <div>Import!</div>;
      case 'export':
        return <div>Export!</div>;
      default:
        return <div>Unknown Modal Type: {props.modalContent}</div>;
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
  closeModal
};

export default connect(
  mapState,
  mapDispatch
)(BaseModal);
