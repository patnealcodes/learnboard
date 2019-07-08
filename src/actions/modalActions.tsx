import { AnyAction } from 'redux';

export type ModalType = 'import' | 'export';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(contentId: ModalType): AnyAction {
  return {
    type: OPEN_MODAL,
    payload: {
      contentId
    }
  };
}

export function closeModal(): AnyAction {
  return {
    type: CLOSE_MODAL
  };
}
