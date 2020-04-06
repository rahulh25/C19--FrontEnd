import React from "react";
/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */

class Stats extends React.Component {
  render() {
    const {
      currentStep,
      firstStep,
      goToStep,
      lastStep,
      nextStep,
      previousStep,
      totalSteps,
      step,
      form,
    } = this.props;
    const hasValue = (obj, key) => {
      let bool = obj.hasOwnProperty(key) && obj[key] != "" && obj[key] != null;
      return bool;
    };
    const isTermsChecked = (obj, key) => {
      let bool = obj.hasOwnProperty(key) && obj[key] == true;
      return bool;
    };
    const validateRequired = () => {
      if (step == 1) {
        let result =
          form != undefined &&
          hasValue(form, "firstName") &&
          hasValue(form, "lastName") &&
          hasValue(form, "dateofBirth") &&
          hasValue(form, "gender");
        if (!result) {
          ///alert the user to input required
          alert("Please input all the required fields!");
          return;
        }
      } else if (step == 2) {
        const { isEmailAddress, isEmailAlreadyExists } = this.props;
        let result =
          form != undefined &&
          hasValue(form, "email") &&
          isEmailAddress &&
          !isEmailAlreadyExists &&
          hasValue(form, "password") &&
          hasValue(form, "confirmpassword");
        if (!result) {
          ///alert the user to input required
          alert("Please input all the required fields!");
          return;
        }
      } else if (step == 3) {
        let result =
          form != undefined &&
          hasValue(form, "type") &&
          hasValue(form, "education") &&
          hasValue(form, "skills") &&
          hasValue(form, "portfolioLink") &&
          isTermsChecked(form, "terms");
        if (!result) {
          ///alert the user to input required
          alert("Please input all the required fields!");
          return;
        }
      }
      nextStep();
    };
    return (
      <div>
        <hr />
        {step > 1 && (
          <button
            className="btn btn-secondary btn-block"
            onClick={previousStep}
          >
            Go Back
          </button>
        )}
        {step == 3 ? (
          <button
            className="btn btn-success btn-block"
            onClick={validateRequired}
          >
            Register
          </button>
        ) : (
          <button
            className="btn btn-primary btn-block"
            onClick={validateRequired}
          >
            Continue
          </button>
        )}
      </div>
    );
  }
}

export default Stats;
