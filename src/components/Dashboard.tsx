import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, withStyles, Theme, createStyles, WithStyles, ButtonGroup, Button, Card, CardActions } from '@material-ui/core';
import { AddCircleRounded } from '@material-ui/icons';
import { connect } from 'react-redux';

import { AppState } from '../reducers';
import { ProjectState } from '../reducers/projectReducer';
import { openModal } from '../actions/modalActions';
import { removeProject } from '../actions/projectActions';

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
    card: {
      width: 240,
      padding: spacing(4)
    },
    openLink: {
      color: 'white',
      textDecoration: 'none'
    }
  });

const Dashboard = withStyles(styles)((props: DashboardProps) => {
  const { classes, projects, openModal, removeProject } = props;

  function renderExistingProjects() {
    return projects.projectList.map(p => {
      return (
        <Card className={classes.card}>
          <Typography variant="h5">{p.title}</Typography>
          <Typography variant="body1">{p.description}</Typography>
          <Typography variant="body2">{`${p.id} things`}</Typography>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              <Link className={classes.openLink} to={`/board/${p.id}`}>Open</Link>
            </Button>
            <Button size="small" color="secondary" onClick={() => removeProject(p.id)}>Delete</Button>
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

      {renderExistingProjects()}
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
