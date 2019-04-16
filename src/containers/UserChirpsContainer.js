import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirps } from '../actions/chirps';
import PropTypes from 'prop-types';
import UserChirps from '../components/chirps/UserChirps';
import { getUserChirps, isLoading } from '../selectors/chirps';
import { getName } from '../selectors/session';

class UserChirpsContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array,
    fetch: PropTypes.func,
    loading: PropTypes.bool,
    user: PropTypes.string
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <UserChirps chirps={this.props.chirps} loading={this.props.loading} userName={this.props.user}/>
    );
  }
}

const mapStateToProps = (state) => ({
  chirps: getUserChirps(state),
  loading: isLoading(state),
  user: getName(state)
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
