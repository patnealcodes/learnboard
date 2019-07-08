import { combineReducers } from 'redux';

import drawerReducer, { DrawerState } from './drawerReducer';
import modalReducer, { ModalState } from './modalReducer';
import projectReducer, { ProjectState } from './projectReducer';

export interface AppState {
  drawer: DrawerState;
  modal: ModalState;
  projects: ProjectState;
}

export default combineReducers<AppState>({
  drawer: drawerReducer,
  modal: modalReducer,
  projects: projectReducer
});
