import React from "react";
import "./SplashPage.css";
class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {" "}
        <div className="bgimg">
          <div className="middle">
            <h1>
              <b>
                NEU AI Skunkworks COVID-19 Response Site is Currently Under
                Construction
              </b>
            </h1>
            <h4>
              <b>
                If you wish to contribute, please email to
                nikbearbrown@gmail.com
              </b>
            </h4>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
