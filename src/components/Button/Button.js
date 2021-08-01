import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ text, buttonAction }) {
  return (
    <div className={styles.container}>
      <button type="button" onClick={buttonAction} className={styles.button}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default Button;