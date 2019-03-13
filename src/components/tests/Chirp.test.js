import React from 'react';
import renderer from 'react-test-renderer';
import Chirp from '../chirps/Chirp';

describe('Chirp', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Chirp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
