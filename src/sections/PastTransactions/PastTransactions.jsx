import CustomSlider from '../../components/Slider/Slider';
import './PastTransactions.scss';
import bottomLine from '../../assets/bottomline.svg';

const PastTransactions = () => {
  return (
    <section className="transactions">
      <div className="transactions__container wrapper">
        <div className="transactions__title">Прошедшие сделки</div>
        <div className="transactions__online">
          <img src="/src/assets/round.svg" alt="round" />
          <p className="online">Online</p>
        </div>
        <CustomSlider />
      </div>
      <img src={bottomLine} alt="line" className="transactions__b-line" />
    </section>
  );
};

export default PastTransactions;
