/* eslint-disable react/prop-types */
export default function WelcomeScreen({ totalQuestions, dispatch }) {
  const handleStart = () => {
    dispatch({ type: "StartGame" });
  };

  return (
    <div className="start">
      <h2>Welcome to DISC Test !</h2>
      <h3>
        <strong>{totalQuestions}</strong> questions to test your personality
        style.
      </h3>
      <button className="btn" onClick={handleStart}>
        Let&apos;s Start !
      </button>
    </div>
  );
}
