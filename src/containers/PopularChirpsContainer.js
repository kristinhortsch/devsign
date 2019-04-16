import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchChirps, updateSearchTerm } from '../actions/chirps';
import PropTypes from 'prop-types';
import PopularChirps from '../components/chirps/PopularChirps';
import { getFilteredChirps, getSearchTerm, isLoading } from '../selectors/chirps';

class PopularChirpsContainer extends PureComponent {
  static propTypes = {
    chirps: PropTypes.array,
    term: PropTypes.string,
    fetchPopular: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchPopular();
  }
  
  render() {
    return (
      <PopularChirps chirps={this.props.chirps} term={this.props.term} onChange={this.props.onChange} loading={this.props.loading}/>
    );
  }
}
const mapStateToProps = state => ({
  chirps: getFilteredChirps(state),
  term: getSearchTerm(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPopular() {
    dispatch(fetchChirps());
  },
  onChange({ target }) {
    return dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PopularChirpsContainer);
