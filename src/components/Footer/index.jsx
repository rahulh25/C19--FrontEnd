import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.grey[700],
    width: '100%',
    color: theme.palette.grey[200],
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>Footer</Container>
    </footer>
  );
};
