import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirpsById } from '../actions/chirps';
import PropTypes from 'prop-types';
import Profile from '../components/users/Profile';
import { getHandle, getProfileImg, getName, getUserId } from '../selectors/session';
import { getChirps } from '../selectors/chirps';

class ProfileContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    handle: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Profile chirps={this.props.chirps} name={this.props.name} handle={this.props.handle} profileImg={this.props.profileImg} userId={this.props.id} />
    );
  }
}
const mapStateToProps = state => ({
  chirps: getChirps(state),
  handle: getHandle(state),
  profileImg: getProfileImg(state),
  name: getName(state),
  id: getUserId(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchChirpsById(props.id));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProfileContainer);
