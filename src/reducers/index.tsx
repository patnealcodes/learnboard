import drawerReducer, { DrawerState } from './drawerReducer';
import modalReducer, { ModalState } from './modalReducer';

import { combineReducers } from 'redux';

export interface AppState {
  drawer: DrawerState;
  modal: ModalState;
}

export default combineReducers<AppState>({
  drawer: drawerReducer,
  modal: modalReducer
});
