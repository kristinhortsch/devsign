import React from 'react';
import renderer from 'react-test-renderer';
import MiniProfile from '../users/MiniProfile';

jest.mock('../../services/auth.js');

describe('MiniProfile', () => {
  it('matches a snapshot', () => {
    const name = 'kristin';
    const handle = '@kristin';
    const profileImg = 'some image';
    const tree = renderer.create(
      <MiniProfile name={name} handle={handle} profileImg={profileImg}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
