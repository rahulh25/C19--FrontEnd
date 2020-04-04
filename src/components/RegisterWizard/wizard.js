import React, { Fragment, useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import Nav from "./nav";
import Plugs from "./Plugs";
import "./wizard.css";
import styles from "./wizard.less";
import transitions from "./transitions.less";
import "react-datepicker/dist/react-datepicker.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Stats from "./Stats";
/* eslint react/prop-types: 0 */

/**
 * A basic demonstration of how to use the step wizard
 */
const Wizard = () => {
  const [state, updateState] = useState({
    form: {},
    transitions: {
      enterRight: `${transitions.animated} ${transitions.enterRight}`,
      enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
      exitRight: `${transitions.animated} ${transitions.exitRight}`,
      exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
      intro: `${transitions.animated} ${transitions.intro}`,
    },
    //demo: true, // uncomment to see more
  });

  const updateForm = (key, value) => {
    const { form } = state;
    form[key] = value;
    console.log("After state update : " + JSON.stringify(form));
    updateState({
      ...state,
      form,
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {
    // console.log(stats);
  };

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });

  const { SW, demo } = state;

  return (
    <div>
      <div className={"jumbotron"}>
        <div className="row">
          <div
            className={`col-12 col-sm-6 offset-sm-3 ${styles["rsw-wrapper"]}`}
          >
            <StepWizard
              onStepChange={onStepChange}
              //  transitions={state.transitions} // comment out for default transitions
              nav={<Nav />}
              instance={setInstance}
            >
              <First
                hashKey={"FirstStep"}
                form={state.form}
                update={updateForm}
              />
              <Second form={state.form} update={updateForm} />
              <Third
                form={state.form}
                hashKey={"TheEnd!"}
                update={updateForm}
              />
            </StepWizard>
          </div>
        </div>
      </div>
      {demo && SW && <InstanceDemo SW={SW} />}
    </div>
  );
};

export default Wizard;

/** Demo of using instance */
const InstanceDemo = ({ SW }) => (
  <Fragment>
    <h4>Control from outside component</h4>
    <button className={"btn btn-secondary"} onClick={SW.previousStep}>
      Previous Step
    </button>
    &nbsp;
    <button className={"btn btn-secondary"} onClick={SW.nextStep}>
      Next Step
    </button>
  </Fragment>
);

