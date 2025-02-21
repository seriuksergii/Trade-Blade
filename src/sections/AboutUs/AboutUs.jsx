import Input from '../../components/Input/Input';

import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="aboutus__container wrapper">
        <div className="aboutus__right" data-aos="fade-left">
          <p className="aboutus__right--title">О компании</p>
          <p className="aboutus__right--description">
            <p>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
            </p>
            <p>
              Он представляет пользователям множество преимуществ, таких как
              более высокая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>
          </p>
        </div>
        <div className="aboutus__left" data-aos="fade-right">
          <div className="aboutus__box">
            <p className="aboutus__left--title">
              Попробуйте сейчас и получите 5 дней бесплатного пользования
            </p>
            <div className="aboutus__input">
              <Input buttonText="Попробовать" className="aboutus-input" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
