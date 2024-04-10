"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [startDate, setStartDate] = useState(new Date("2023-11-17T21:00:00"));
  const [currentTime, setCurrentTime] = useState(new Date());
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      const newDifference = Math.floor((currentTime - startDate) / 1000);
      setDifference(newDifference);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate, currentTime]);

  const days = Math.floor(difference / (3600 * 24));
  const hours = Math.floor((difference % (3600 * 24)) / 3600);
  const minutes = Math.floor((difference % 3600) / 60);
  const seconds = Math.floor(difference % 60);

  return (
    <div className="countdown-timer">
      <div className="timer-container">
        <div className="timer-item">
          <span className="value">{days}</span>
          <span className="label">d</span>
          <span className="value"> {hours}</span>
          <span className="label">h</span>
          <span className="value"> {minutes}</span>
          <span className="label">m</span>
          <span className="value"> {seconds}</span>
          <span className="label">sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
