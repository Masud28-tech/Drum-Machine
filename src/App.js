import { useState } from 'react';
import $ from 'jquery';

import "./App.css";

const DisplayScreen = () => {
  return (
    <div className="display">
      <h1>The Drum Machine</h1>
    </div>
  );
}

const DrumKeys = () => {
  const handleDrumPadClick = (e) => {
    console.log(e);
    const audioElement = e.target.children[1];
    audioElement.play();
  };

  $(document).on('keydown', function (e) {
    const keyPressed = e.key.toUpperCase();
    const audioElement = $('#' + keyPressed)[0];
    if (audioElement === undefined) {
      return;
    }
    console.log(audioElement.innerText);
    audioElement.play();
  });

  return (
    <div className="drum-pads">
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>Q</p>
        <audio
          className="clip"
          id="Q"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
        >Heater 1</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>W</p>
        <audio
          className="clip"
          id="W"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
        >Heater 2</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>E</p>
        <audio
          className="clip"
          id="E"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
        >Heater 3</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>A</p>
        <audio
          className="clip"
          id="A"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
        >Heater 4</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>S</p>
        <audio
          className="clip"
          id="S"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
        >Clap</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>D</p>
        <audio
          className="clip"
          id="D"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
        >Open-HH</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>Z</p>
        <audio
          className="clip"
          id="Z"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
        >Kick-n'-Hat</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>X</p>
        <audio
          className="clip"
          id="X"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
        >Kick</audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        <p>C</p>
        <audio
          className="clip"
          id="C"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
        >Closed-HH</audio>
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className='drum-machine'>
        <DisplayScreen />
        <DrumKeys />
      </div>
    </div>
  );
}

export default App;
