import './Hero.scss';
import hero from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left">
          <h1 className="hero__title">
            моментально<br></br> Копируй сделки<br></br> профи трейдеров
          </h1>
          <h3 className="hero__desc">
            Начни копировать сделки с успешной командой профессиональных
            <br></br>
            трейдеров в автоматическом режиме.
          </h3>
          <div className="hero__input">
            <input
              className="hero__email"
              type="email"
              placeholder="Ваш e–mail"
            />
            <button className="hero__button" type="submit">
              Начать
            </button>
          </div>
          <h4 className="hero__freeuse">5 дней бесплатного пользования</h4>
        </div>
        <div className="hero__right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
