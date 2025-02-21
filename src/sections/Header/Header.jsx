import './Header.scss';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#" className="navbar__logo">
          <img src={Logo} alt="логотип" />
        </a>

        <ul className={isOpen ? 'navbar__menu-list show' : 'navbar__menu-list'}>
          {['Цифри', 'Сделки онлайн', 'компании', 'как начать', 'тарифы', 'отзывы', 'FAQ'].map((item, index) => (
            <li key={index} onClick={closeMenu}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__btns">
          <a className="btn" href="#">
            вхід
          </a>
          <a className="btn register" href="#">
            реєстрація
          </a>
        </div>

        <div className="navbar__menu" onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <IoIosMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
