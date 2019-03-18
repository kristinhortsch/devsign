import React from 'react';
import renderer from 'react-test-renderer';
import ChirpModal from '../chirps/ChirpModal';

jest.mock('../../services/auth.js');

describe('ChirpModal', () => {
  it('matches a snapshot', () => {
    const onClose = jest.fn();
    const show = false;
    const tree = renderer.create(
      <ChirpModal onClose={onClose} show={show}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
