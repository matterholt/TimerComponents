import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const TestStopWatch = styled.div`
  background: #9bcb434f;
  border: 4px solid #31493c;
  text-align: center;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
`;
const TimerDisplay = styled.h1`
  color: #31493c;
  background-color: white;
  border: 1px solid #31493c;
  border-radius: 5px;
  font-size: 50px;
`;

const InputStopWatch = () => {
  return (
    <div>
      <h3> Set Timer: </h3>
      <input type="number" required />;
    </div>
  );
};




const DispalyStopWatch = (props) => {
  return (<TimerDisplay>{props.time}</TimerDisplay>)
};




const StartButton = () => {
  return <button>Start</button>;
};
const ResetButton = () => {
  return <button>Reset</button>;
};

function StopWatch() {
  const [sec, setSec] = useState('00')
  const [min, setMin] = useState('')

  function updateTimer (e){
    setTimer(e.target.value)

  }
  return (
    <TestStopWatch>
      <h1>Count Down Comp</h1>
      <DispalyStopWatch 
      time = {}
      />
      <InputStopWatch
      updateValaue = {updateTimer}
      />
      <StartButton />
      <ResetButton />
    </TestStopWatch>
  );
}

export default StopWatch;
