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
          <div className="topleft">
            <p>Logo</p>
          </div>
          <div className="middle">
            <h1>SITE UNDER CONSTRUCTION</h1>
            <hr />
          </div>
          {/* <div className="bottomleft">
            <p>Some text</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default SplashPage;
