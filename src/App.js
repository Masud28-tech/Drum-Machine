import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

import "./App.css";

// Redux
const displaySlice = createSlice({
  name: 'displayText',
  initialState: {
    text: ''
  },
  reducers: {
    update: (state, action) => {
      state.text = action.payload
    }
  }
});

const store = configureStore({
  reducer: {
    display: displaySlice.reducer
  },
});


// React

const DisplayScreen = () => {
  const displayText = useSelector((state) => state.display.text);

  return (
    <div id="display">
      <h1>The Drum Machine</h1>
      <h2 style={{ border: "1px solid black", margin: '2em', padding: "5em" }}>
        {displayText}
      </h2>
    </div>
  );
};

const DrumKeys = () => {
  const dispatch = useDispatch();
  const {update} = displaySlice.actions;
  const handleDrumPadClick = (e) => {
    const audioElement = e.target.children[0];
    dispatch(update(audioElement.innerText));
    audioElement.play();
  };

  $(document).on("keydown", function (e) {
    const keyPressed = e.key.toUpperCase();
    const audioElement = $("#" + keyPressed)[0];
    if (audioElement === undefined) {
      return;
    }
    dispatch(update(audioElement.innerText));
    audioElement.play();
  });

  return (
    <div className="drum-pads">
      <button className="drum-pad" onClick={handleDrumPadClick}>
        Q
        <audio
          className="clip"
          id="Q"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
        >
          Heater 1
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        W
        <audio
          className="clip"
          id="W"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
        >
          Heater 2
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        E
        <audio
          className="clip"
          id="E"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
        >
          Heater 3
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        A
        <audio
          className="clip"
          id="A"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
        >
          Heater 4
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        S
        <audio
          className="clip"
          id="S"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
        >
          Clap
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        D
        <audio
          className="clip"
          id="D"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
        >
          Open-HH
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        Z
        <audio
          className="clip"
          id="Z"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
        >
          Kick-n'-Hat
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        X
        <audio
          className="clip"
          id="X"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
        >
          Kick
        </audio>
      </button>
      <button className="drum-pad" onClick={handleDrumPadClick}>
        C
        <audio
          className="clip"
          id="C"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
        >
          Closed-HH
        </audio>
      </button>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div id="drum-machine">
        <DisplayScreen />
        <DrumKeys />
      </div>
    </Provider>
  );
}

export default App;


