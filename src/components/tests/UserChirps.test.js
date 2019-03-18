import React from 'react';
import renderer from 'react-test-renderer';
import UserChirps from '../chirps/UserChirps';

describe('UserChirps', () => {
  it('matches a snapshot', () => {
    const chirps = [{
      text: 'hi',
      user: {
        nickname: 'kh',
        handle: '@kh',
        picture: 'some image',
        name: 'kristin'
      }
    }];

    
    const tree = renderer.create(
      <UserChirps chirps={chirps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
