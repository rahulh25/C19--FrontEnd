import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
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
    return <h1>Hello</h1>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
