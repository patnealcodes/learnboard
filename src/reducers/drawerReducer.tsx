import { AnyAction, Reducer } from 'redux';

export interface DrawerState {
  drawerOpen: boolean;
}

const InitialDrawerState: DrawerState = { drawerOpen: false };

const drawerReducer: Reducer<DrawerState> = (state: DrawerState = InitialDrawerState, action: AnyAction) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        drawerOpen: true
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        drawerOpen: false
      };
    default:
      return state;
  }
};

export default drawerReducer;
