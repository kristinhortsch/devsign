import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirp, removeChirp } from '../actions/chirps';
import { getChirp } from '../selectors/chirps';
import { getName, getHandle, getProfileImg } from '../selectors/session';
import PropTypes from 'prop-types';
import ChirpDetail from '../components/chirps/ChirpDetail';

class ChirpDetailContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    chirp: PropTypes.object,
    name: PropTypes.string,
    handle: PropTypes.string,
    profileImg: PropTypes.string
  };

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <>
        <ChirpDetail {...this.props } />
      </>
    );
  }
}


const mapStateToProps = state => ({
  chirp: getChirp(state),
  name: getName(state),
  handle: getHandle(state),
  profileImg: getProfileImg(state) 
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchChirp(props.match.params.id));
  },
  onClick() {
    dispatch(removeChirp(props.match.params.id));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChirpDetailContainer);



