import reducer from './modal';

describe('modal reducer', () => {
  it('handles show modal action', () => {
    const state = {
      modal: { 
        isOpen: false
      }
    };

    const updatedModal = reducer(state, {
      type: 'SHOW_MODAL',
      payload: true
    });

    expect(updatedModal).toEqual(true);
  });

  it('handles hide modal action', () => {
    const state = {
      modal: { 
        isOpen: true
      }
    };

    const updatedModal = reducer(state, {
      type: 'HIDE_MODAL',
      payload: false
    });

    expect(updatedModal).toEqual(false);
  });
});
