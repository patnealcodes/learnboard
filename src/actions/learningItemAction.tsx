import { AnyAction } from 'redux';

export type ProjectType = 'link' | 'video' | 'text';

export interface LearningItemData {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  data: string;
}

export const ADD_LEARNING_ITEM = 'ADD_LEARNING_ITEM';
export const EDIT_LEARNING_ITEM = 'EDIT_LEARNING_ITEM';
export const REMOVE_LEARNING_ITEM = 'REMOVE_LEARNING_ITEM';

export function addProject(learningItemData: LearningItemData): AnyAction {
  return {
    type: ADD_LEARNING_ITEM,
    payload: learningItemData
  };
}

export function editProject(learningItemData: LearningItemData): AnyAction {
  return {
    type: EDIT_LEARNING_ITEM,
    payload: learningItemData
  };
}

export function removeProject(projectId: string): AnyAction {
  return {
    type: REMOVE_LEARNING_ITEM,
    payload: projectId
  };
}
