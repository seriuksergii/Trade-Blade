import './Footer.scss';
import Logo from '../../assets/logo.svg';
import { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="footer" data-aos="flip-up">
      <div className="footer__container wrapper">
        <div className="footer__top">
          <p className="footer__top-text">Быстрая навигация</p>
          <a href="#" className="footer__logo">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="footer__bottom">
          <ul className={isOpen ? 'show' : ''}>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">Цифры</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">Сделки онлайн</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">компании</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">как начать</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">тарифы</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">отзывы</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <p className="footer__bottom-text">
            © 2022 TradeBlade. All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
