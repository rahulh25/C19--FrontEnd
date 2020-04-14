import React from "react";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import Stats from "./Stats";
class First extends React.Component {
  render() {
    const update = (e) => {
      this.props.update(e.target.name, e.target.value);
    };
    const updateDate = (name, value) => {
      this.props.update(name, value);
    };
    const updateGender = (name, value) => {
      this.props.update(name, value);
    };
    return (
      <div>
        <h4 className="introduceText">INTRODUCE YOURSELF</h4>
        <h3>Hi there!</h3>

        <label>
          First Name <span className="requiredColor">*</span>
        </label>
        <input
          required
          type="text"
          className="form-control"
          name="firstName"
          placeholder="First Name"
          onChange={update}
        />
        <label>
          Last Name <span className="requiredColor">*</span>
        </label>
        <input
          required
          type="text"
          className="form-control"
          name="lastName"
          placeholder="Last Name"
          onChange={update}
        />
        <label>
          Date of birth <span className="requiredColor">*</span>
        </label>
        <div className="dateofbirth">
          {" "}
          <DateOfBirth onUpdate={updateDate} />
        </div>
        <label>Gender</label>
        <Gender onUpdate={updateGender} />
        <Stats step={1} {...this.props} />
      </div>
    );
  }
}

export default First;
