import React from "react";
import axios from "axios";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`http://localhost:3000/api?name=${this.state.value}`)
      .then(res => {
        console.log(res);
        this.setState({ message: JSON.stringify(res) });
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your name
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.message}
      </div>
    );
  }
}

export default TestComponent;
