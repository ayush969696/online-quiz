import React from 'react';

const QuizResults = ({ quiz, answers, score }) => {
  return (
    <div className="quiz-results">
      <h2 className="text-2xl font-bold mb-4">Results for {quiz.title}</h2>
      <p className="text-lg">Score: {score} / {quiz.questions.length}</p>
      {quiz.questions.map((q, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-xl font-semibold">{q.question}</h3>
          {q.options.map((opt, j) => (
            <div key={j} className={`mt-2 ${j === q.correct ? 'text-green-600' : ''} ${answers[i] === j && j !== q.correct ? 'text-red-600' : ''}`}>
              {opt} {j === q.correct ? '(Correct Answer)' : ''}
            </div>
          ))}
          <p className="mt-2">Your answer: {q.options[answers[i]]}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizResults;
