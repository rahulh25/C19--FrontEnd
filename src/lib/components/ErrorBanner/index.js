import React, { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  snackbar: {
    width: '100%',
  },
  errorAlert: {
    width: '100%',
    margin: '0 5px',
  },
});

export const ErrorBanner = ({ error, message }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(!!error);
  }, [error]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      classes={{ root: classes.snackbar }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        classes={{ root: classes.errorAlert }}
      >
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};
