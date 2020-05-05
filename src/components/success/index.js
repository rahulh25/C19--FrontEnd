import React from "react";

class SuccessNotification extends React.Component {
  render() {
    return (
      <div>
        {this.props.message != null && (
          <div class="alert alert-success" role="alert">
            {this.props.message}
          </div>
        )}
      </div>
    );
  }
}

export default SuccessNotification;
