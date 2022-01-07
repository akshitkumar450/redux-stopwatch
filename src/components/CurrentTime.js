import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { secondsTimer } from "../Redux/Actions/Actions";
import Buttons from "./Buttons";
import FormatTimer from "./FormatTimer";
import Laps from "./Laps";

const CurrentTime = () => {
  const timer = useSelector((state) => state.time.timer);
  const start = useSelector((state) => state.time.start);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect running");
    let interval;
    if (start === true) {
      interval = setInterval(() => {
        dispatch(secondsTimer());
      }, 10);
    }

    // clean up function
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, start]);

  return (
    <div className="currentTime">
      <h2>STOPWATCH</h2>
      <FormatTimer timer={timer} />
      <Buttons />
      <Laps />
    </div>
  );
};

export default CurrentTime;
