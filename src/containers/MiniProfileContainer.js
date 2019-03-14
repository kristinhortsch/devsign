import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirps } from '../actions/chirps';
import PropTypes from 'prop-types';
import MiniProfile from '../components/users/MiniProfile';
import { getHandle, getProfileImg, getName } from '../selectors/session';
import { getChirps } from '../selectors/chirps';

class MiniProfileContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array,
    fetchPopular: PropTypes.func,
    handle: PropTypes.string,
    profileImg: PropTypes.string,
    name: PropTypes.string
  };

  componentDidMount() {
    this.props.fetchPopular();
  }

  render() {
    return (
      <MiniProfile name={this.props.name} handle={this.props.handle} profileImg={this.props.profileImg} />
    );
  }
}
const mapStateToProps = state => ({
  chirps: getChirps(state),
  handle: getHandle(state),
  profileImg: getProfileImg(state),
  name: getName(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPopular() {
    dispatch(fetchChirps());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MiniProfileContainer);
