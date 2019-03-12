import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

describe('Modal', () => {
  it('matches a snapshot', () => {
    const onClose = jest.fn();
    const show = false;
    const tree = renderer.create(
      <Modal onClose={onClose} show={show}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
