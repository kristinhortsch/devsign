import React from 'react';
import NewChirpContainer from '../../containers/NewChirpContainer';
import PropTypes from 'prop-types';
import { Section } from './ChirpModalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
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
      <Section>
        <div className="backdropStyle">
          <div className="chirpModal">
            <button onClick={this.props.onClose} className="closeButton">
              <FontAwesomeIcon icon="window-close" className="close"/>
            </button>
            <h3>New Chirp</h3>
            <NewChirpContainer />
          </div>
        </div>
      </Section>
    );
  }
}
