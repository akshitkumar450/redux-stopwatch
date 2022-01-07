import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(startTimer())}>
          start
        </Button>
      ) : (
        <div className="pause-resume-btn">
          <Button variant="contained" color="primary" onClick={handleTimer}>
            {start ? "pause" : "resume"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(lapTimer())}>
            laps
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(resetTimer())}>
            reset
          </Button>
        </div>
      )}
    </div>
  );
}

export default Buttons;
