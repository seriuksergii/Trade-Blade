import './Tariffs.scss';
import Button from '../../components/Button/Button';

const Tariffs = () => {
  return (
    <section className="tariffs">
      <div className="tariffs__container wrapper">
        <h1 className="tariffs__title">Тарифи</h1>
        <div className="tariffs__bts">
          <Button text="СПОТ" />
          <Button text="фьючерс" className="tariffs__btn2" />
        </div>
        <div className="tariffs__banners">
          <div className="tariffs__banner-left">
            <h1>STANDART</h1>
            <p className="item">Ручной трейдинг</p>
            <p className="item">
              Автоматическое или полуавтоматическое копирование сделок
            </p>
            <p className="item">Личный кабинет со статистикой</p>
            <p className="item">
              Среднесрочные сделки с уровнями набора портфеля
            </p>
            <div className="pice__month">
              <p className="price">$234</p>
              <p className="month"></p>
            </div>
            <Button text="Попробовать" />
          </div>
          <div className="tariffs__banner-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
