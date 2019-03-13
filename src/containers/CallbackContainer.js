import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSession } from '../actions/session';

class Callback extends PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    return <h1>LOADING</h1>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Callback);
