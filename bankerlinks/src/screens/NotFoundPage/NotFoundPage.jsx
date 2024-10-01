import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { state: { targetSection: 'hero' } });
  };

  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <button onClick={handleGoHome}>
          <strong>Go to Home Page</strong>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
