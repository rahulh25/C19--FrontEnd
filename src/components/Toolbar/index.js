import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import './styles/index.css';
import logo from './assets/temp_logo.png';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {
    color: '#ffffff',
  },
});

export const Toolbar = () => {
  const classes = useStyles();
  const location = useLocation();

  const excludedPaths = new Set([
    '/',
    '/login',
    '/register',
    '/forgotPassword',
  ]);

  return excludedPaths.has(location.pathname) ? null : (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__login">
          {' '}
          <a href="/homepage">
            <img src={logo} alt="logo" />{' '}
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li key="/login">
              <Link component={RouterLink} to="/login">
                login
              </Link>
            </li>
            <li key="/register">
              <Link component={RouterLink} to="/register">
                register
              </Link>
            </li>
            <li key="/dashboard">
              <Button
                component={Link}
                variant="contained"
                to="/dashboard"
                color="primary"
                classes={{ label: classes.label }}
              >
                post a job
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
