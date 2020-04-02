import React from "react";
import "./SplashPage.css";
class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {" "}
        <div className="bgimg">
          <div className="middle">
            <h1>
              NEU AI Skunkworks COVID-19 Response Site is Currently Under
              Construction
            </h1>
            <h4>If you wish to contribute, please email to nikbearbrown@gmail.com</h4>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
