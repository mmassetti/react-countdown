import React, { Component } from "react";
import Countdown from "./Countdown.js";
import streiten from "./streiten.png";
import zoom from "./zoom.png";
import SpotifyPlayer from "react-spotify-player";
import ing from "./ing.png";

const size = {
  width: 500,
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "black"; // or 'white'

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

          {/* <a
            href="https://zoom.us/j/92644814669?pwd=Z1NZTWorV2tsV3ArbkRjZlQxSmVHZz09"
            target="_blank"
          >
            <img src={zoom} alt="github" className="githubIcon" />
            <span>Link a zoom</span>
          </a>
          <span>
            <strong>Código de acceso:</strong> 224010
          </span> */}
        </div>
        <h1 className="title">¡FELICITACIONES INGENIERO STREITENBERGER! </h1>
        <h3 className="title" style={{ color: "red" }}>
          No pude preparar otra cosa{" "}
          <a href="https://youtu.be/rEioQKCPn78?t=2780" target="_blank">
            {" "}
            <span>perdoname boludo</span>
          </a>
        </h3>
        <div>
          <img width="500" src={ing} alt="ta que te pario Crucitti" />;
        </div>
        {/* <Countdown date={`${year}-09-10T16:00:00`} /> */}
        <SpotifyPlayer
          uri="https://open.spotify.com/playlist/37i9dQZF1DZ06evO2u2Cxv?si=qpBunl3qS-uMK_dAk03jKw"
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}

export default App;
