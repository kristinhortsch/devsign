import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupModal from '../components/SignupModal';
import { showModal, hideModal } from '../actions/modal';
import { isOpen } from '../selectors/modal';
import styled from 'styled-components';

const Button = styled.button`
  background: #00bfff;
  color: white;
  padding: 8px;
  border-radius: 7px;
  border: 1 px solid darkgray;
`;

export const withModalContainer = Component => {
  class WithModalContainer extends React.PureComponent {
    static propTypes = {
      isOpen: PropTypes.bool,
      show: PropTypes.func,
      hide: PropTypes.func
    };
  
    render() {
      return (
        <div> 
          <Button type="submit" onClick={this.props.show}>Sign Up</Button>
          <Component show={this.props.isOpen} onClose={this.props.hide} />
        </div>  
      );
    }
  }
  return WithModalContainer;
};

const mapStateToProps = state => ({
  isOpen: isOpen(state)
});

const mapDispatchToProps = dispatch => ({
  show() {
    dispatch(showModal());
  }, 
  hide() {
    dispatch(hideModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withModalContainer(SignupModal));




