import React, { useState } from 'react';
import './home.css';
import data from '../../../data.json';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const clearSearch = () => {
    setSearchTerm('');
    setShowResults(false);
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Ваш вопрос..."
          id="searchInput"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(e.target.value !== '');
          }}
          className="search-input"
        />
        <span className="input_span" onClick={clearSearch}>
          X
        </span>
      </div>
      <div className="result-container" style={{ display: showResults ? 'block' : 'none' }}>
        {data
          .filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (val.question.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          })
          .map((el) => (
            <div key={el.id} className="result-item">
              <h3>{el.question}</h3>
              <p>{el.answer}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
