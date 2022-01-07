import { useState } from "react";

const CurrentTime = () => {
  const [timer, setTime] = useState(0);
  return (
    <div className="currentTime">
      <h2>STOPWATCH</h2>
      <div className="currentTime__container">
        {/**Showing the current time */}
        <span>{`0 ${Math.floor((timer / 360000) % 24)}`.slice(-2)}:</span>
        <span>{`0 ${Math.floor((timer / 60000) % 60)}`.slice(-2)}:</span>
        <span>{`0 ${Math.floor((timer / 1000) % 60)}`.slice(-2)}:</span>
        <span>{`0 ${(timer / 10) % 100}`.slice(-2)}</span>
      </div>
    </div>
  );
};

export default CurrentTime;
