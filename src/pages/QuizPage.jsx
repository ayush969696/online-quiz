import React, { useState } from 'react';
import QuizTaking from '../components/QuizTaking';
import QuizResults from '../components/QuizResults';

const QuizPage = () => {
  const savedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const submitQuiz = (quiz, userAnswers) => {
    const correctAnswers = quiz.questions.map(q => q.correct);
    const userScore = correctAnswers.reduce((score, correct, index) => score + (userAnswers[index] === correct ? 1 : 0), 0);
    setScore(userScore);
    setAnswers(userAnswers);
    setQuizCompleted(true);
  };

  return (
    <div className="quiz-page">
      {!selectedQuiz ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select a Quiz</h2>
          {savedQuizzes.map((quiz, index) => (
            <button
              key={index}
              onClick={() => setSelectedQuiz(quiz)}
              className="block mb-4 border-2 px-8 py-3 border-orange-500 hover:bg-orange-500 transition duration-500 ease-in-out hover:scale-105 hover:text-white"
            >
              {quiz.title}
            </button>
          ))}
        </div>
      ) : !quizCompleted ? (
        <QuizTaking quiz={selectedQuiz} submitQuiz={submitQuiz} />
      ) : (
        <QuizResults quiz={selectedQuiz} answers={answers} score={score} />
      )}
    </div>
  );
};

export default QuizPage;
