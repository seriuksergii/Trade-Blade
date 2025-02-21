import './Input.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Input = ({ buttonText, className }) => {
  return (
    <div className={`input ${className}`}>
      <input className="input-field" type="email" placeholder="Ваш e–mail" />
      <Button text={buttonText} />
    </div>
  );
};

Input.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
