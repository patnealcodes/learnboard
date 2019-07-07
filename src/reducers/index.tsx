import drawerReducer, { DrawerState } from './drawerReducer';

import { combineReducers } from 'redux';

export interface AppState {
  drawer: DrawerState;
}

export default combineReducers<AppState>({
  drawer: drawerReducer
});
