import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirp, removeChirp } from '../actions/chirps';
import PropTypes from 'prop-types';
// import Chirp from '../components/chirps/Chirp';
// import { getUserChirps, isLoading } from '../selectors/chirps';
// import { getName } from '../selectors/session';

class ChirpDetailContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <>
      <button onClick={this.props.onClick}>Remove Chirp</button>
      </>
    );
  }
}


const mapStateToProps = () => ({
  
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchChirp(props.match.params.id));
  },
  onClick() {
    dispatch(removeChirp(props.match.params.id));
    window.location = '/chirps';
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChirpDetailContainer);



