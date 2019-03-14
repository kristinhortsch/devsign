import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../users/Profile';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

jest.mock('../../services/auth.js');

describe('Home', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
