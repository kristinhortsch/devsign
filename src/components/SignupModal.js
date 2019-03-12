import React from 'react';
import Signup from './Signup';
import PropTypes from 'prop-types';
import styles from './app/App.css';

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
        <button onClick={this.props.onClose}>
          X
        </button>
        <Signup />
      </div>
    );
  }
}
