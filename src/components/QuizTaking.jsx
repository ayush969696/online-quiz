import React, { useState, useEffect } from 'react';

const QuizTaking = ({ quiz, submitQuiz }) => {
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(JSON.parse(localStorage.getItem(quiz.title)) || {});

  useEffect(() => {
    setAnswers(progress);
  }, [progress]);

  const handleChange = (questionIndex, answerIndex) => {
    const newAnswers = { ...answers, [questionIndex]: answerIndex };
    setAnswers(newAnswers);
    localStorage.setItem(quiz.title, JSON.stringify(newAnswers));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuiz(quiz, answers);
    localStorage.removeItem(quiz.title);
  };

  return (
    <div className="quiz-taking">
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((q, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-xl font-semibold">{q.question}</h3>
            {q.options.map((opt, j) => (
              <div key={j} className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`question${i}`}
                    value={j}
                    checked={answers[i] === j}
                    onChange={() => handleChange(i, j)}
                    className="form-radio"
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizTaking;
