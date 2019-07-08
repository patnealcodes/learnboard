import { AnyAction, Reducer } from 'redux';
import { ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, ProjectData } from '../actions/projectActions';

export interface ProjectState {
  projectList: ProjectData[];
}

// export const PROJECTS_REF = 'LBPROJECTS';

// function getStoredProjects(): ProjectData[] {
//   return JSON.parse(localStorage.getItem(PROJECTS_REF) || '[]');
// }

// const initialProjectState = { projectList: [...getStoredProjects()] };
const initialProjectState = { projectList: [] };

const projectReducer: Reducer<ProjectState, AnyAction> = (state: ProjectState = initialProjectState, action: AnyAction) => {
  let newList = [...state.projectList];

  switch (action.type) {
    case ADD_PROJECT:
      newList.push(action.payload);

      return {
        ...state,
        projectList: newList
      };

    case EDIT_PROJECT:
      const indexToEdit = newList.findIndex(p => p.id === action.payload.id);

      newList[indexToEdit] = action.payload;

      return {
        ...state,
        projectList: newList
      };

    case REMOVE_PROJECT:
      return {
        ...state,
        projectList: newList.filter(p => p.id !== action.payload)
      };

    default:
      return state;
  }
};

export default projectReducer;
