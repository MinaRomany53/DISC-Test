/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Quiz({ questions, curr, dispatch }) {
  const [most, setMost] = useState("");
  const [least, setLeast] = useState("");


  const handleNext = () => {
    const result = [
      questions[curr - 1].options[most].most,
      questions[curr - 1].options[least].least,
    ];
    dispatch({ type: "Answer", payload: result });
    dispatch({ type: "NextQuestion" });
    setLeast("");
    setMost("");
  };

  const handleMost = (i) => {
    setMost(i);
  };
  const handleLeast = (i) => {
    setLeast(i);
  };
  return (
    <div className="quiz">
      <div className="options">
        <div className="options-header">
          <button className="btn-header btn-green"> </button>
          <button className="btn-header btn-green"> الأعلي </button>
          <button className="btn-header btn-green"> الأدني </button>
        </div>
        {questions[curr - 1].options.map((option, i) => {
          return (
            <div className="options-body" key={i}>
              <button className="btn-header">{option.text}</button>
              <button
                className={`btn ${i === most ? "choosen" : ""}`}
                onClick={() => handleMost(i)}
              >
                {option.most}
              </button>
              <button
                className={`btn ${i === least ? "choosen" : ""}`}
                onClick={() => handleLeast(i)}
              >
                {option.least}
              </button>
            </div>
          );
        })}
      </div>

      {most !== "" && least !== "" && (
        <button className="btn btn-ui" onClick={handleNext}>
          {curr === questions.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}
