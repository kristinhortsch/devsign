import { isOpen } from '../selectors/modal';

describe('selectors test', () => {
  it('can get the modal isOpen status', () => {
    const state = {
      modal: {
        isOpen: true
      }
    };
    const fetchedModalStatus = isOpen(state);
    expect(fetchedModalStatus).toEqual(true);
  });
});
