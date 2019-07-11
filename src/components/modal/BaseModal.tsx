import React from 'react';
import { Modal, WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { connect } from 'react-redux';

import { AppState } from '../../reducers';
import { closeModal, ModalType } from '../../actions/modalActions';

import ImportModal from './components/Import';
import ExportModal from './components/Export';
import AddProjectModal from './components/AddProject';

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
      margin: `${spacing(4)}px 0 0`,
      maxWidth: 400,
      outline: 'none',
      padding: spacing(4),
      position: 'absolute',
      width: '100%'
    },
    closeBtn: {
      cursor: 'pointer',
      position: 'absolute',
      right: spacing(1),
      top: spacing(1)
    }
  });

const BaseModal = withStyles(styles)(({ classes, modalContent, closeModal, modalOpen }: BaseModalProps) => {
  function renderModalContent() {
    switch (modalContent) {
      case 'import':
        return <ImportModal />;
      case 'export':
        return <ExportModal />;
      case 'addProject':
        return <AddProjectModal />;
      default:
        return <div>Unknown Modal Type: {modalContent}</div>;
    }
  }

  return (
    <div>
      <Modal className={classes.modal} aria-labelledby="Base Modal" aria-describedby="Base Modal Description" open={modalOpen} onClose={closeModal}>
        <div className={classes.paper}>
          <Close className={classes.closeBtn} onClick={closeModal} />
          {renderModalContent()}
        </div>
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
