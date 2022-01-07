import React from "react";

function FormatTimer({ timer }) {
  return (
    <div className="currentTime__container">
      {/**Showing the current timer */}
      <span>{`0${Math.floor(timer / 3600)}`.slice(-2)}:</span>
      <span>{`0${Math.floor(timer / 60)}`.slice(-2)}:</span>
      <span>{`0${timer % 60}`.slice(-2)}</span>
    </div>
  );
}

export default FormatTimer;
