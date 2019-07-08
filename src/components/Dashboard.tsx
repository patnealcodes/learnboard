import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import { AppState } from '../reducers';
import { ProjectState } from '../reducers/projectReducer';
import { addProject, editProject, removeProject, ProjectData } from '../actions/projectActions';

interface DashboardProps extends WithStyles {
  addProject(obj0: ProjectData): void;
  editProject(obj0: ProjectData): void;
  removeProject(obj0: string): void;
  projects: ProjectState;
}

const styles = ({ spacing }: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      margin: spacing(4)
    }
  });

const Dashboard = withStyles(styles)((props: DashboardProps) => {
  const { classes, addProject, editProject, removeProject, projects } = props;

  // TEMPORARY
  function tempAdd() {
    addProject({
      id: '4',
      name: 'Yahoo',
      description: 'Another search engine',
      type: 'link',
      data: 'http://yahoo.com'
    });
  }
  function tempEdit() {
    editProject({
      id: '1',
      name: 'Boogle',
      description: 'Bearch bengine',
      type: 'link',
      data: 'http://boogle.coogle'
    });
  }
  function tempRemove() {
    removeProject('4');
  }
  // TEMPORARY

  function renderProjects() {
    return projects.projectList.map(p => {
      return <div key={p.id}>{p.name}</div>;
    });
  }

  return (
    <div>
      <Typography className={classes.header} variant="h4">
        Your LearnBoard Projects
      </Typography>
      {/* TEMPORARY */}
      <Link to="/board">To LearnBoard</Link>
      <div>
        <button onClick={tempAdd}>Add</button>
        <button onClick={tempEdit}>Edit</button>
        <button onClick={tempRemove}>Remove</button>
      </div>
      {/* TEMPORARY */}
      {renderProjects()}
    </div>
  );
});

const mapState = ({ projects }: AppState) => ({
  projects
});

const mapDispatcher = {
  addProject,
  editProject,
  removeProject
};

export default connect(
  mapState,
  mapDispatcher
)(Dashboard);
