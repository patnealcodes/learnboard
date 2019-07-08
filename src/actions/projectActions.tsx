import { AnyAction } from 'redux';

export type ProjectType = 'link' | 'video' | 'text';

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  data: string;
}

export const ADD_PROJECT = 'ADD_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export function addProject(projectData: ProjectData): AnyAction {
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
