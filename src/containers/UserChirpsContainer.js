import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirps } from '../actions/chirps';
import PropTypes from 'prop-types';
import UserChirps from '../components/chirps/UserChirps';
import { getUserChirps, isLoading } from '../selectors/chirps';

class UserChirpsContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array,
    fetch: PropTypes.func,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <UserChirps chirps={this.props.chirps} loading={this.props.loading}/>
    );
  }
}

const mapStateToProps = (state) => ({
  chirps: getUserChirps(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchChirps());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserChirpsContainer);
