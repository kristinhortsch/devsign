import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChirpModal from '../components/chirps/ChirpModal';
import { showModal, hideModal } from '../actions/modal';
import { isOpen } from '../selectors/modal';
import { Section } from './ModalContainerChirpSyles';

export const withModalContainer = Component => {
  class WithModalContainer extends React.PureComponent {
    static propTypes = {
      isOpen: PropTypes.bool,
      show: PropTypes.func,
      hide: PropTypes.func
    };
  
    render() {
      return (
        <Section> 
          <button type="submit" onClick={this.props.show}><img className="birdie" src='https://res.cloudinary.com/khortsch/image/upload/v1552673467/logo.png' alt="logo"/></button>
          <Component show={this.props.isOpen} onClose={this.props.hide} />
        </Section>  
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
)(withModalContainer(ChirpModal));
