import React from "react";
import ReactDOM from "react-dom";
import StartButton from "../src/StartButton";
import CountDown from "../src/Countdown";

function App() {
  return (
    <div className="App">
      <StartButton />
      <CountDown />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
