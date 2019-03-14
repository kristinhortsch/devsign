import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../app/Header';
import { Provider } from 'react-redux';
import store from '../../store';
import { MemoryRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faWindowClose);

jest.mock('../../services/auth.js');

describe('Header', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
