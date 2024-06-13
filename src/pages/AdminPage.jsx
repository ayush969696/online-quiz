import React, { useState } from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
    localStorage.setItem('quizzes', JSON.stringify([...quizzes, quiz]));
  };

  return (
    <div className="admin-page">
      <AdminPanel addQuiz={addQuiz} />
    </div>
  );
};

export default AdminPage;
