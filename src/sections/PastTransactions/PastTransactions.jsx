import CustomSlider from '../../components/Slider/Slider';
import './PastTransactions.scss';

const PastTransactions = () => {
  return (
    <section className="transactions">
      <div className="transactions__container wrapper">
        <div className="transactions__title">Прошедшие сделки</div>
        <div className="transactions__online">
          <img src="/round.svg" alt="round" />
          <p className="online">Online</p>
        </div>
        <CustomSlider />
      </div>
    </section>
  );
};

export default PastTransactions;
