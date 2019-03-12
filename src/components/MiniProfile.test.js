import React from 'react';
import renderer from 'react-test-renderer';
import MiniProfile from './MiniProfile';

describe('MiniProfile', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MiniProfile />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
