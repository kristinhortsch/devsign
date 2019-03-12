import React from 'react';
import Signup from './Signup';
import PropTypes from 'prop-types';
import styles from '../css/signup.css';

export default class SignupModal extends React.PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool
  };
  
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className={styles.backdropStyle}>
        <div className={styles.signupModal}>
          <button onClick={this.props.onClose} className={styles.closeButton}>
            X
          </button>
          <h3>Sign Up</h3>
          <Signup />
        </div>
      </div>
    );
  }
}

