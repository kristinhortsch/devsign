import React from 'react';
import renderer from 'react-test-renderer';
import PopularChirps from './PopularChirps';

describe('PopularChirps', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <PopularChirps />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
