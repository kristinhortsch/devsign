import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../users/Profile';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faWindowClose);

jest.mock('../../services/auth.js');
jest.mock('../../services/chirps.js');

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
