import React from 'react';
import NewChirp from './NewChirp';
import PropTypes from 'prop-types';
import styles from './app/App.css';

export default class Modal extends React.PureComponent {
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
        <NewChirp />
      </div>
    );
  }
}
