import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('Loading', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Loading />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
