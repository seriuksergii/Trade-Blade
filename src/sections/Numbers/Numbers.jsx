import './Numbers.scss';

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="numbers__container wrapper">
        <div className="numbers__title" data-aos="fade-down">
          <h1>Цифры</h1>
          <h5>Cентябрь 2022</h5>
        </div>
        <div className="numbers__data">
          <div className="numbers__item" data-aos="fade-up">
            <p className="numbers__item-title">Торговой прибыли</p>
            <p className="numbers__item-info">2756%</p>
          </div>
          <div className="numbers__item" data-aos="fade-down">
            <p className="numbers__item-title">фьючерсных и спотовых сделок</p>
            <p className="numbers__item-info">67</p>
          </div>
          <div className="numbers__item" data-aos="fade-up">
            <p className="numbers__item-title">прибыль подписчиков</p>
            <p className="numbers__item-info">375000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
