import React from 'react';
import renderer from 'react-test-renderer';
import NewChirp from '../chirps/NewChirp';

describe('NewChirp', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <NewChirp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
