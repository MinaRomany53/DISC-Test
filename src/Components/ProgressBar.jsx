/* eslint-disable react/prop-types */
export default function ProgressBar({ curr, totalQuestions }) {
  return (
    <div className="progress">
      <progress value={curr} max={totalQuestions}></progress>
      <p>
        Question {""}
        <strong>
          {curr} / {totalQuestions}
        </strong>
      </p>
    </div>
  );
}
