import React from "react";

const ProgressBar = ({ idQuestion, maxQuestions }) => {
  const getPercent = (totalquestions, questionId) => {
    return (100 / totalquestions) * questionId;
  };
  const actualQuestion = idQuestion + 1;
  const progressPercent = getPercent(maxQuestions, actualQuestion);
  // console.log(progressPercent);
  return (
    <>
      <div className="percentage">
        <div className="progressPercent">{`Question: ${
          idQuestion + 1
        }/${maxQuestions}`}</div>
        <div className="progressPercent">{`Progression: ${progressPercent}%`}</div>
      </div>
      <div className="progressBar">
        <div
          className="progressBarChange"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </>
  );
};

// React memo permet d'éviter le rechargement de page
export default React.memo(ProgressBar);
