import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.grey[700],
    width: '100%',
    color: theme.palette.grey[200],
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  listItem: {
    flexGrow: '1',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container classes={{ root: classes.container }}>
        <List classes={{ root: classes.list }}>
          <ListItem classes={{ root: classes.listItem }}>
            <Link to="/eula" component={RouterLink} color="textSecondary">
              <Typography variant="subtitle1">EULA</Typography>
            </Link>
          </ListItem>
          <ListItem classes={{ root: classes.listItem }}>
            <Link
              to="/privacy-policy"
              component={RouterLink}
              color="textSecondary"
            >
              <Typography variant="subtitle1">Privacy Policy</Typography>
            </Link>
          </ListItem>
        </List>
      </Container>
    </footer>
  );
};
