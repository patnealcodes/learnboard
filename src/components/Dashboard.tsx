import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';

interface DashboardProps extends WithStyles {}

const styles = ({ spacing }: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      margin: spacing(4)
    }
  });

const Dashboard = withStyles(styles)((props: DashboardProps) => {
  const { classes } = props;

  return (
    <div>
      <Typography className={classes.header} variant="h4">
        Your LearnBoard Projects
      </Typography>

      {/* TEMPORARY */}
      <Link to="/board">To</Link>
      {/* TEMPORARY */}
    </div>
  );
});

export default Dashboard;
