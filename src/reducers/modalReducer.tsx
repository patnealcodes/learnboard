import { AnyAction, Reducer } from 'redux';
import { OPEN_MODAL, CLOSE_MODAL, ModalType } from '../actions/modalActions';

export interface ModalState {
  open: boolean;
  contentId: ModalType;
}

const initialModalState: ModalState = { open: false, contentId: '_EMPTY_MODAL' };

const modalReducer: Reducer<ModalState, AnyAction> = (state: ModalState = initialModalState, action: AnyAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      const contentId = action.payload.contentId;

      return {
        ...state,
        open: true,
        contentId
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...initialModalState
      };
    default:
      return state;
  }
};

export default modalReducer;
