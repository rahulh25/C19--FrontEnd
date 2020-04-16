import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login.component';
import Register from './components/register.component';
import Dashboard from './components/dashboard.component';
import ForgotPassword from './components/forgotpassword.component';
import Homepage from './components/homepage.component';
import TestComponent from './TestComponent';
import { Jobs, Toolbar } from './components';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 10000,
  // offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d41b2c',
    },
  },
});

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <React.StrictMode>
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <Router>
            <Toolbar />
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route path="/homepage">
                <Homepage />
              </Route>
              <Route path="/hello">
                <TestComponent />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/forgotPassword">
                <ForgotPassword />
              </Route>
              <Route path="/jobs">
                <Jobs />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </AlertProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
