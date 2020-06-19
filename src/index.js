import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login.component';
import Register from './components/register.component';
import ForgotPassword from './components/forgotpassword.component';
import Homepage from './components/homepage.component';
import TestComponent from './TestComponent';
import { Footer, Dashboard, Jobs, PrivacyPolicy, EULA } from './components';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';
import 'react-notification-alert/dist/animate.css';
import Profile from './components/profile.component';
import ErrorBoundary from './components/ErrorBoundary';
import Visualizations from './components/Visualizations/visualizations.component';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d41b2c',
    },
    text: {
      secondary: '#fafafa',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              {/* <Route exact path="/">
                  <App />
                </Route> */}
              <Route path="/hello">
                <TestComponent />
              </Route>
              <Route path="/login">
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              </Route>
              <Route path="/profile">
                <ErrorBoundary>
                  <Profile />
                </ErrorBoundary>
              </Route>
              <Route path="/register">
                <ErrorBoundary>
                  <Register />
                </ErrorBoundary>
              </Route>
              <Route path="/dashboard">
                <ErrorBoundary>
                  <Dashboard />
                </ErrorBoundary>
              </Route>
              <Route exact path="/">
                <ErrorBoundary>
                  <Homepage />
                </ErrorBoundary>
              </Route>
              <Route path="/forgotPassword">
                <ErrorBoundary>
                  <ForgotPassword />
                </ErrorBoundary>
              </Route>
              <Route path="/jobs">
                <ErrorBoundary>
                  <Jobs />
                </ErrorBoundary>
              </Route>
              <Route path="/visualizations">
                <ErrorBoundary>
                  <Visualizations />
                </ErrorBoundary>
              </Route>
              <Route path="/eula">
                <ErrorBoundary>
                  <EULA />
                </ErrorBoundary>
              </Route>
              <Route path="/privacy-policy">
                <ErrorBoundary>
                  <PrivacyPolicy />
                </ErrorBoundary>
              </Route>
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
