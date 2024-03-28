import React, { useState } from 'react';
import './home.css';
import SectionSelection from '../SectionSelectionPage/SectionSelectionPage'
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const validUsername = '1'; // Замените на ваш реальный логин
  const validPassword = '1'; // Замените на ваш реальный пароль

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      
      setLoginError(false);
      setLoggedIn(true);
    } else {
      setLoginError(true);
      setLoggedIn(false);
    }
  };
  return (
    
    <main className="main">
    {!isLoggedIn && (
        <div className='validation'>
          {loginError && <p style={{ color: 'red' }}>Неверный логин или пароль</p>}
          <label>
            Логин:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Пароль:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin} className='button'>Войти</button>
        </div>
      )}
      {isLoggedIn && <Navigate to='/section-selection'/>}
    </main>
  );
};

export default Home;
