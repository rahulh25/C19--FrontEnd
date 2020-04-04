import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DateOfBirth extends React.Component {
  state = {
    startDate: null
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    let dateString = date != null ? date.toDateString() : null;
    this.props.onUpdate("dateofBirth", dateString);
  };

  render() {
    return (
      <DatePicker
        isClearable
        maxDate={new Date(2002, 0)}
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText="MM/DD/YYYY"
      />
    );
  }
}

export default DateOfBirth;
