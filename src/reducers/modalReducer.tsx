import { AnyAction, Reducer } from 'redux';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

export interface ModalState {
  open: boolean;
  contentId?: string;
}

const initialModalState: ModalState = { open: false };

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
      const closeModalState = {
        ...state,
        open: false
      };

      delete closeModalState.contentId;

      return closeModalState;
    default:
      return state;
  }
};

export default modalReducer;
