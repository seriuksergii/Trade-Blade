import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';

const CustomSlider = () => {
  const [cards, setCards] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('/data/cards.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Ошибка загрузки', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,

    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const progressWidth = ((currentSlide + 1) / cards.length) * 100;

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="slider-card" data-aos="flip-left">
            <img
              src="/src/assets/log.svg"
              alt="log"
              className="card-background"
            />
            <p className="card_title">{card.title}</p>
            <p className="card_description">{card.description}</p>
            <p className="card_text">{card.text}</p>
            <p className="card_percent">
              {card.percent} <img src="/src/assets/arrow.svg" alt="arrow" />
            </p>
            <div className="card-footer">
              <p className="card_goal">{card.goal}</p>
              <p className="card_data">{card.data}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressWidth}%` }} />
      </div>
    </div>
  );
};

export default CustomSlider;
