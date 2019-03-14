import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirps } from '../actions/chirps';
import PropTypes from 'prop-types';
import UserChirps from '../components/chirps/PopularChirps';
import { getChirps } from '../selectors/chirps';

//need to fix selector to match only the user's tweets 

class UserChirpsContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array,
    fetchPopular: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchPopular();
  }

  render() {
    return (
      <UserChirps chirps={this.props.chirps} />
    );
  }
}
const mapStateToProps = state => ({
  chirps: getChirps(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPopular() {
    dispatch(fetchChirps());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserChirpsContainer);
