import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../users/Login';

jest.mock('../../services/auth.js');

describe('Login', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
