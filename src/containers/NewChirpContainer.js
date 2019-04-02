import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewChirp from '../components/chirps/NewChirp';
import { createChirp, updateChirp } from '../actions/chirps';
import { getChirp } from '../selectors/chirp';
import { getChirps } from '../selectors/chirps';
import { getUserId } from '../selectors/session';

class NewChirpContainer extends PureComponent {
  static propTypes = {
    chirp: PropTypes.string.isRequired,
    chirps: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    user: PropTypes.string
  };

  render() {
    return (
      <NewChirp handleSubmit={this.props.handleSubmit} onChange={this.props.onChange} chirp={this.props.chirp} chirps={this.props.chirps} />
    );
  }
}

const mapStateToProps = state => ({
  chirp: getChirp(state),
  chirps: getChirps(state),
  user: getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateChirp(target.value));
  },
  handleSubmit(chirp, event) {
    console.log(chirp);
    event.preventDefault();
    dispatch(createChirp({ chirp }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NewChirpContainer);
