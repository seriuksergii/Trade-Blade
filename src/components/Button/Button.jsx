import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="custom-button" type="submit">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
