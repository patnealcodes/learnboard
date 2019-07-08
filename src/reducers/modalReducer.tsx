import { AnyAction, Reducer } from 'redux';

export interface ModalState {
  open: boolean;
  contentId?: boolean | string;
}

const InitialModalState: ModalState = { open: false, contentId: false };

const modalReducer: Reducer<ModalState> = (state: ModalState = InitialModalState, action: AnyAction) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      const contentId = action.payload.contentId;

      return {
        ...state,
        open: true,
        contentId: contentId ? contentId : false
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        open: false,
        contentId: false
      };
    default:
      return state;
  }
};

export default modalReducer;
