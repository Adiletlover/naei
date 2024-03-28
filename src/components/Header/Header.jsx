import React from 'react';
import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  });
  const [Toggle, showMenu] = useState(false);
  const [active, setActive] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          NAEI
        </Link>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
          <li className="nav__item"><Link className={active === '#about' ? 'nav__link active-link' : 'nav__link'} to='/search/Анатомия'>Анатомия</Link></li>       
          
          <li className="nav__item"><Link className={active === '#about' ? 'nav__link active-link' : 'nav__link'} to='/search/Гистология'>Гистология</Link></li>       
        <li className="nav__item"><Link className={active === '#about' ? 'nav__link active-link' : 'nav__link'} to='/search/Стоматология'>Стоматология</Link></li>       
        <li className="nav__item"><Link className={active === '#about' ? 'nav__link active-link' : 'nav__link'} to='/search/Онкология'>Онкология</Link></li>
            
   
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;