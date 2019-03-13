import React from 'react';
import renderer from 'react-test-renderer';
import Trending from '../chirps/Trending';

describe('Trending', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Trending />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
