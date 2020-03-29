import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import SplashPage from "./SplashPage";
/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  simpleAction: data => dispatch(simpleAction(data))
});
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SplashPage />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
