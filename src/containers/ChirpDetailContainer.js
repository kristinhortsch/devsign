import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirps, removeChirp } from '../actions/chirps';
import PropTypes from 'prop-types';
import ChirpDetail from '../components/chirps/ChirpDetail';
// import { getUserChirps, isLoading } from '../selectors/chirps';
// import { getName } from '../selectors/session';

class UserChirpsContainer extends PureComponent {
  static propTypes = {
    
  };

  componentDidMount() {
    
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <ChirpDetail />
    );
  }
}


const mapStateToProps = () => ({
  
});

const mapDispatchToProps = () => ({
  
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserChirpsContainer);



