import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPopularChirps } from '../actions/chirps';
import PropTypes from 'prop-types';
import PopularChirps from '../components/chirps/PopularChirps';
import { getChirps } from '../selectors/chirps';

class ChirpsContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array,
    fetchPopular: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchPopular();
  }

  render() {
    return (
      <PopularChirps chirps={this.props.chirps} />
    );
  }
}
const mapStateToProps = state => ({
  chirps: getChirps(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPopular() {
    dispatch(fetchPopularChirps());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChirpsContainer);
