import React from "react";
import { useSelector } from "react-redux";
import FormatTimer from "./FormatTimer";

function Laps() {
  const laps = useSelector((state) => state.time.laps);
  return (
    <div className="laps__container">
      {laps?.length !== 0 && <h1>LAPS</h1>}

      {!laps?.length !== 0 &&
        laps.map((lap, idx) => (
          <div key={idx} className="laps">
            <span>Lap {idx + 1} : </span>
            <FormatTimer timer={lap} />
          </div>
        ))}
    </div>
  );
}

export default Laps;
