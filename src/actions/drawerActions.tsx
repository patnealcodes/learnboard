import { AnyAction } from 'redux';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export function openDrawer(): AnyAction {
  return {
    type: OPEN_DRAWER
  };
}

export function closeDrawer(): AnyAction {
  return {
    type: CLOSE_DRAWER
  };
}
