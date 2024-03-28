import React from 'react';
import { Link } from 'react-router-dom';
import './section.css'

function SectionSelection() {
  return (
    <div className='container'>
      <h1 className='mb-3'>Выберите тему:</h1>
      <ul className="nav__list grid">
        <li className="nav__item"><Link className='nav__link' to='/search/Анатомия'>Анатомия</Link></li>
        <li className="nav__item"><Link className='nav__link' to='/search/Гистология'>Гистология</Link></li>       
        <li className="nav__item"><Link className='nav__link' to='/search/Стоматология'>Стоматология</Link></li>       
        <li className="nav__item"><Link className='nav__link' to='/search/Онкология'>Онкология</Link></li>       
      </ul>
    </div>
  );
}

export default SectionSelection ;