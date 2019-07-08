import { Store } from 'redux';
import { addProject, ProjectData } from '../actions/projectActions';

export default function initializeLocalStorage(storeRef: Store) {
  // Cache ref to localStorage key
  const PROJECTS_REF = 'LBPROJECTS';

  // Hydrate store from localStorage on initial load
  const storedProjects: ProjectData[] = JSON.parse(localStorage.getItem(PROJECTS_REF) || '[]');

  // TODO: Add a one-time mass import action
  // Add each project to the store
  storedProjects.map(p => storeRef.dispatch(addProject(p)));

  // Set initial app load store snapshot
  let storeSnapshot = storeRef.getState();

  // Subscribe to changes to the store
  storeRef.subscribe(() => {
    // Cache ref to pre-change snapshot
    const previousState = storeSnapshot;
    // Update snapshot to & cache ref to post change data
    const currentState = (storeSnapshot = storeRef.getState());

    // If projectList was changed
    if (previousState.projects.projectList !== currentState.projects.projectList) {
      // Update the localStorage data
      localStorage.setItem(PROJECTS_REF, JSON.stringify(storeSnapshot.projects.projectList));
    }
  });
}
