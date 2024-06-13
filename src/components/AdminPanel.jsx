import React, { useState } from 'react';

const AdminPanel = ({ addQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correct: 0 }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correct: 0 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'question') {
      newQuestions[index].question = value;
    } else if (field.startsWith('option')) {
      const optionIndex = parseInt(field.split('option')[1]);
      newQuestions[index].options[optionIndex] = value;
    } else if (field === 'correct') {
      newQuestions[index].correct = parseInt(value);
    }
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuiz({ title, questions });
    setTitle('');
    setQuestions([{ question: '', options: ['', '', '', ''], correct: 0 }]);
  };

  return (
    <div className="admin-panel">
      <h2 className="text-2xl font-bold mb-4">Create a Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Quiz Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        {questions.map((q, i) => (
          <div key={i} className="mb-4">
            <label className="block text-sm font-medium">Question {i + 1}</label>
            <input
              type="text"
              value={q.question}
              onChange={(e) => handleQuestionChange(i, 'question', e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
              required
            />
            {q.options.map((opt, j) => (
              <div key={j} className="mt-2 flex items-center">
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleQuestionChange(i, `option${j}`, e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                  required
                />
                <input
                  type="radio"
                  name={`correct${i}`}
                  value={j}
                  checked={q.correct === j}
                  onChange={(e) => handleQuestionChange(i, 'correct', e.target.value)}
                  className="ml-2"
                />
              </div>
            ))}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Question
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          Save Quiz
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
