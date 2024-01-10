import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const validUsername = 'naei04060911'; // Замените на ваш реальный логин
  const validPassword = 'naei04060911'; // Замените на ваш реальный пароль

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
    <>
      <Header />
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
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
