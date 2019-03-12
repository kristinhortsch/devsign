import React from 'react';
import NewChirp from './NewChirp';
import PropTypes from 'prop-types';

export default class ChirpModal extends React.PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool
  };
  
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div>
        <button onClick={this.props.onClose}>
          X
        </button>
        <NewChirp />
      </div>
    );
  }
}
