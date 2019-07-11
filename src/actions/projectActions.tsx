import { AnyAction } from 'redux';
import { LearningItemData } from './learningItemAction';

export interface UserDefinedProjectData {
  title: string;
  description: string;
}

export interface ProjectData extends UserDefinedProjectData {
  id: string
  learningItems: LearningItemData[]
}

export const ADD_PROJECT = 'ADD_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export function addProject(projectData: UserDefinedProjectData): AnyAction {
  return {
    type: ADD_PROJECT,
    payload: projectData
  };
}

export function editProject(projectData: ProjectData): AnyAction {
  return {
    type: EDIT_PROJECT,
    payload: projectData
  };
}

export function removeProject(projectId: string): AnyAction {
  return {
    type: REMOVE_PROJECT,
    payload: projectId
  };
}
