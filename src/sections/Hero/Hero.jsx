import './Hero.scss';
import hero from '/hero.png';
import bottomLine from '/bottomline.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Input from '../../components/Input/Input';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__right" data-aos="fade-left">
          <img src={hero} alt="hero" />
        </div>
        <div className="hero__left" data-aos="fade-right">
          <h1 className="hero__title">
            моментально
            <br /> Копируй сделки
            <br /> профи трейдеров
          </h1>
          <h3 className="hero__desc">
            Начни копировать сделки с успешной командой профессиональных
            <br />
            трейдеров в автоматическом режиме.
          </h3>
          <Input buttonText="Начать" className="hero-input" />
          <h4 className="hero__freeuse">5 дней бесплатного пользования</h4>
        </div>

        <img src={bottomLine} alt="line" className="hero__b-line" />
      </div>
    </section>
  );
};

export default Hero;
