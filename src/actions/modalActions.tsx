import { AnyAction } from 'redux';

export const actionTypes = {
  openModal: 'OPEN_MODAL',
  closeModal: 'CLOSE_MODAL'
};

export function openModal(contentId?: string): AnyAction {
  return {
    type: actionTypes.openModal,
    payload: {
      contentId: contentId || false
    }
  };
}

export function closeModal(): AnyAction {
  return {
    type: actionTypes.closeModal
  };
}
