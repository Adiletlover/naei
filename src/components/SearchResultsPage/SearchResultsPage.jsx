import React, { useState } from 'react';
import data from '../../../data.json';
import { useParams } from 'react-router-dom';

const SearchResultsPage = () => {
  const { topic } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const clearSearch = () => {
    setSearchTerm('');
    setShowResults(false)
  };

  const filteredQuestions = data.filter(question => {
    if (topic === 'Анатомия' && !question.section) {
      return true; // Если тема - Анатомия и у вопроса отсутствует раздел, не показываем этот вопрос
    }
    if (topic && question.section) {
      return question.section === topic; // Если тема совпадает с разделом вопроса, показываем его
    } else {
      return false; // Если нет параметра или раздела, показываем все вопросы
    }
  }).filter(question => {
    // Фильтруем вопросы по введенному пользователем поисковому запросу
    if (searchTerm.trim() === '') {
      return false; // Показываем все вопросы, если поисковый запрос пустой
    } else {
      return question.question.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });
  
  return (
    <div className="container">
      <h2 className='mb-3'>Вы искали по теме {topic}</h2>
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
        {filteredQuestions.map((el) => (
          <div key={el.id} className="result-item">
            <h3>{el.question}</h3>
            <p>{el.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
