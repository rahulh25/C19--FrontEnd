import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/index.css';
import logo from './assets/temp_logo.png';

export const Toolbar = (props) => {
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
        <div></div>
        <div className="toolbar__login">
          {' '}
          <a href="/homepage">
            <img src={logo} alt="logo" />{' '}
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a href="/login">login </a>
            </li>
            <li>
              <a href="/register">register </a>
            </li>
            <form action="/jobs">
              <button type="submit">post a job</button>
            </form>
            <li>
              <a href="/"> </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
