import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const StartStopButton = () => {
  const [go, pause] = useState(true);

  function updateTimer() {
    if (go == true) {
      pause(false);
    } else {
      pause(true);
    }
  }
  if (go == true) {
    return <button onClick={updateTimer}>Pause</button>;
  } else {
    return <button onClick={updateTimer}>Start</button>;
  }
};

function Timer() {
  const [time, setTimer] = useState(0);

  function workTimer() {
    setTimer();
  }
  return (
    <div>
      <p>start timer</p>
      <h3> {time} </h3>
      <StartStopButton />
    </div>
  );
}

export default Timer;
