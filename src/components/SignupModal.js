import React from 'react';
import Signup from './Signup';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section = styled.section`
.backdropStyle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(178, 178, 187, 0.479);
  .signupModal {
    background: white;
    width: 40%;
    margin: 50% auto;
    padding: 100px;
    box-shadow: 2px 2px 5px blue;
    position: relative;
    .closeButton {
      text-align: right;
      position: absolute;
      top: 0;
      right: 0;
      margin-bottom: 3%;
      color: red;
    }
  }
}
`;

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
      <Section>
        <div className="backdropStyle">
          <div className="signupModal">
            <button onClick={this.props.onClose} className="closeButton">
              <FontAwesomeIcon icon="window-close" className="close"/>
            </button>
            <h3>Sign Up</h3>
            <Signup />
          </div>
        </div>
      </Section>
    );
  }
}

