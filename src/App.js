import React, { Component } from "react";
import Countdown from "./Countdown.js";
import streiten from "./streiten.png";
import zoom from "./zoom.png";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={streiten} className="App-logo" alt="logo" />
          <h2>Ingeniero Streitenberger</h2>

          <a
            href="https://zoom.us/j/92644814669?pwd=Z1NZTWorV2tsV3ArbkRjZlQxSmVHZz09"
            target="_blank"
          >
            <img src={zoom} alt="github" className="githubIcon" />
            <span>Link a zoom</span>
          </a>
          <span>
            <strong>Código de acceso:</strong> 224010
          </span>
        </div>

        <h3 className="title">¡Se nos recibe Blitz!</h3>
        <Countdown date={`${year}-09-10T16:00:00`} />
      </div>
    );
  }
}

export default App;
