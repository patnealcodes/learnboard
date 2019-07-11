import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, withStyles, Theme, createStyles, WithStyles, ButtonGroup, Button, Card, CardActions, GridList } from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import { connect } from 'react-redux';

import { AppState } from '../reducers';
import { ProjectState } from '../reducers/projectReducer';
import { openModal } from '../actions/modalActions';
import { removeProject, ProjectData } from '../actions/projectActions';

interface DashboardProps extends WithStyles {
  openModal(arg0: string): void;
  removeProject(arg0: string): void;
  projects: ProjectState;
}

const styles = ({ spacing }: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      margin: spacing(4)
    },
    addIcon: {
      margin: '0 10px 0 0'
    },
    projectGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: spacing(1)
    },
    card: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: 240,
      marginBottom: spacing(1),
      marginRight: spacing(1),
      padding: spacing(4)
    },
    openLink: {
      color: 'white',
      textDecoration: 'none'
    },
    items: {
      color: '#666666'
    }
  });

const Dashboard = withStyles(styles)((props: DashboardProps) => {
  const { classes, projects, openModal, removeProject } = props;

  function deleteProject(project: ProjectData) {
    if (window.confirm(`Are you sure you want to delete the '${project.title}' project ? `)) {
      removeProject(project.id);
    }
  }

  function renderExistingProjects() {
    return projects.projectList.map(p => {
      return (
        <Card key={p.id} className={classes.card}>
          <Typography variant="h5">{p.title}</Typography>
          <Typography variant="body1">{p.description}</Typography>
          <Typography className={classes.items} variant="body2">{`${p.learningItems.length} items`}</Typography>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              <Link className={classes.openLink} to={`/board/${p.id}`}>Open</Link>
            </Button>
            <Button size="small" color="secondary" onClick={() => deleteProject(p)}>Delete</Button>
          </CardActions>
        </Card>
      )
    });
  }

  return (
    <div>
      <Typography className={classes.header} variant="h4">
        Your LearnBoard Projects
      </Typography>

      <ButtonGroup
        variant="contained"
        color="primary"
        fullWidth
        aria-label="Full-width contained primary button group"
      >
        <Button onClick={() => openModal('addProject')}>
          <AddCircleRounded className={classes.addIcon} />
          Add New Project
        </Button>
      </ButtonGroup>

      <GridList className={classes.projectGrid} cols={3}>
        {renderExistingProjects()}
      </GridList>
    </div>
  );
});

const mapState = ({ projects }: AppState) => ({
  projects
});

const mapDispatcher = {
  openModal,
  removeProject
};

export default connect(
  mapState,
  mapDispatcher
)(Dashboard);
