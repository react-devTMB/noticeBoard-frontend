import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const LoadingBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default LoadingBar;
