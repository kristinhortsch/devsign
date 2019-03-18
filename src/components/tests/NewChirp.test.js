import React from 'react';
import renderer from 'react-test-renderer';
import NewChirp from '../chirps/NewChirp';

describe('NewChirp', () => {
  it('matches a snapshot', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const chirp = 'hey there';

    const tree = renderer.create(
      <NewChirp onClick={onClick} onChange={onChange} chirp={chirp}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
