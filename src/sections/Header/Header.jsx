import './Header.scss';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#" className="navbar__logo">
          <img src={Logo} alt="logo" />
        </a>

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

        <div className="navbar__btns">
          <a className="btn" href="#">
            вход
          </a>
          <a className="btn register" href="#">
            регистрация
          </a>
        </div>

        <div className="navbar__menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoIosMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
