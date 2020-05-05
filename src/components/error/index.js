import React from "react";

class ErrorNotification extends React.Component {
  render() {
    return (
      <div>
        {this.props.message != null && (
          <div class="alert alert-danger" role="alert">
            {this.props.message}
          </div>
        )}
      </div>
    );
  }
}

export default ErrorNotification;
