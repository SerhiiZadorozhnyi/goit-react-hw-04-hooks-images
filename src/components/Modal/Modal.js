import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressEscBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressEscBtn);
    this.props.onCloseModal();
  }

  pressEscBtn = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, children } = this.props;

    return (
      <div className={styles.overlay} onClick={onCloseModal}>
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;