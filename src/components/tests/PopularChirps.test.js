import React from 'react';
import renderer from 'react-test-renderer';
import PopularChirps from '../chirps/PopularChirps';

describe('PopularChirps', () => {
  it('matches a snapshot', () => {
    const chirps = [
      { chirp: 'hi' }
    ];
    const tree = renderer.create(
      <PopularChirps chirps={chirps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
