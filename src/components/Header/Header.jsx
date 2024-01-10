import React from 'react';
import { useState } from 'react';
import './header.css';

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
        <a href="index.html" className="nav__logo">
          NAEI
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActive('#home')}
                className={active === '#home' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-estate nav__icon"></i> Главная
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://us-tuna-sounds-images.voicemod.net/88463959-b331-4a6a-b9ee-9843ec1a9229-1665760464118.png"
                onClick={() => setActive('#about')}
                className={active === '#about' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-user nav__icon"></i> Про Меня
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActive('#skills')}
                className={active === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-file-alt nav__icon"></i> Навыки
              </a>
            </li> */}

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActive('#services')}
                className={active === '#services' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Услуги
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActive('#portfolio')}
                className={active === '#portfolio' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-scenery nav__icon"></i> Портфолио
              </a>
            </li> */}

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActive('#contact')}
                className={active === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                <i className="uil uil-message nav__icon"></i> Контакты
              </a>
            </li>
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