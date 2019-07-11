import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { addProject, UserDefinedProjectData } from '../../../actions/projectActions';
import { closeModal } from '../../../actions/modalActions';

interface Props {
  addProject(arg0: UserDefinedProjectData): void;
  closeModal(): void;
}

const baseProjectValues = {
  title: '',
  description: ''
}

const useStyles = makeStyles(({ spacing }: Theme) => (
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    textField: {
      margin: `0 ${spacing(1)}`
    }
  })
))

const AddProjectModal = ({ addProject, closeModal }: Props) => {
  const classes = useStyles();
  const [values, setValues] = useState(baseProjectValues)

  const handleChange = (val: any) => (event: any): void => {
    setValues({ ...values, [val]: event.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject(values);
    closeModal();
  }

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6">Add a Project</Typography>
      <TextField
        id="project-title"
        label="Title"
        className={classes.textField}
        value={values.title}
        onChange={handleChange('title')}
        required
      />
      <TextField
        id="project-description"
        label="Description"
        className={classes.textField}
        value={values.description}
        onChange={handleChange('description')}
        required
      />
      <Button type="submit">Add Project</Button>
    </form>
  )
}

const mapDispatch = { addProject, closeModal };

export default connect(null, mapDispatch)(AddProjectModal);