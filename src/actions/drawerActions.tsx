import { AnyAction } from 'redux';

export const actionTypes = {
  openDrawer: 'OPEN_DRAWER',
  closeDrawer: 'CLOSE_DRAWER'
};

export function openDrawer(): AnyAction {
  return {
    type: actionTypes.openDrawer,
    payload: {}
  };
}

export function closeDrawer(): AnyAction {
  return {
    type: actionTypes.closeDrawer,
    payload: {}
  };
}
