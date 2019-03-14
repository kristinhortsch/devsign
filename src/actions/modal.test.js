import { SHOW_MODAL, showModal, HIDE_MODAL, hideModal } from './modal';

describe('actions test', () => {
  it('shows the modal', () => {
    const action = showModal();

    expect(action).toEqual({ 
      type: SHOW_MODAL,
      payload: true
    });
  });

  it('hides the modal', () => {
    const action = hideModal();

    expect(action).toEqual({
      type: HIDE_MODAL,
      payload: false
    });
  });
});
