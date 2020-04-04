import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
class Gender extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    this.props.onUpdate("gender", event.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio style={{ height: 10 }} />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio style={{ height: 10 }} />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio style={{ height: 10 }} />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default Gender;
