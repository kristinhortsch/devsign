import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewChirp from '../components/chirps/NewChirp';
import { createChirpAction, updateChirp } from '../actions/chirps';
import { getChirp } from '../selectors/chirp';
import { getChirps } from '../selectors/chirps';

class NewChirpContainer extends PureComponent {
  static propTypes = {
    chirp: PropTypes.string.isRequired,
    chirps: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    return (
      <NewChirp onSubmit={this.props.onSubmit} onChange={this.props.onChange} chirp={this.props.chirp} chirps={this.props.chirps} />
    );
  }
}

const mapStateToProps = state => ({
  chirp: getChirp(state),
  chirps: getChirps(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      chirp: updateChirp
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(chirp, event) {
    event.preventDefault(),
    dispatch(createChirpAction({ chirp }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NewChirpContainer);
