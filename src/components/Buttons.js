import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lapTimer,
  pauseTimer,
  resetTimer,
  resumeTimer,
  startTimer,
} from "../Redux/Actions/Actions";

function Buttons() {
  const isClicked = useSelector((state) => state.time.isClicked);
  const start = useSelector((state) => state.time.start);
  const dispatch = useDispatch();

  const handleTimer = () => {
    if (start) {
      dispatch(pauseTimer());
    } else {
      dispatch(resumeTimer());
    }
  };
  return (
    <div className="btns__container">
      {!isClicked ? (
        <button onClick={() => dispatch(startTimer())}>start</button>
      ) : (
        <div className="pause-resume-btn">
          <button onClick={handleTimer}>{start ? "pause" : "resume"}</button>
          <button onClick={() => dispatch(lapTimer())}>laps</button>
          <button onClick={() => dispatch(resetTimer())}>reset</button>
        </div>
      )}
    </div>
  );
}

export default Buttons;
