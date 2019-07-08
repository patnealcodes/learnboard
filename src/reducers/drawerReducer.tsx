import { AnyAction, Reducer } from 'redux';

export interface DrawerState {
  open: boolean;
}

const initialDrawerState: DrawerState = { open: false };

const drawerReducer: Reducer<DrawerState, AnyAction> = (state: DrawerState = initialDrawerState, action: AnyAction) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        open: true
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default drawerReducer;
