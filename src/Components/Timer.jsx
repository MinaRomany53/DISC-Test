/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Timer({ dispatch }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 seconds

  useEffect(() => {
    // Stop when time reaches 0
    if (timeLeft <= 0) {
      dispatch({ type: "Result" });
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timeLeft]);

  // Convert seconds into MM:SS format
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p className="timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}
