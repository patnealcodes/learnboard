import { AnyAction, Reducer } from 'redux';
import shortId from 'shortid';

import { ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, ProjectData } from '../actions/projectActions';

export interface ProjectState {
  projectList: ProjectData[];
}

const initialProjectState = { projectList: [] };

// TEMPORARY
function generateUUID() {
  // return Math.floor(100000 + Math.random() * 900000).toString();
  return shortId.generate()
}
// TEMPORARY

const projectReducer: Reducer<ProjectState, AnyAction> = (state: ProjectState = initialProjectState, action: AnyAction) => {
  const projectList = [...state.projectList];

  switch (action.type) {
    case ADD_PROJECT:
      const newProject = {
        id: generateUUID(),
        learningItems: [],
        ...action.payload
      }

      projectList.push(newProject);

      return {
        ...state,
        projectList: projectList
      };

    case EDIT_PROJECT:
      const indexToEdit = projectList.findIndex(p => p.id === action.payload.id);

      projectList[indexToEdit] = action.payload;

      return {
        ...state,
        projectList: projectList
      };

    case REMOVE_PROJECT:
      return {
        ...state,
        projectList: projectList.filter(p => p.id !== action.payload)
      };

    default:
      return state;
  }
};

export default projectReducer;
