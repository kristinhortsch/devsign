export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = () => ({
  type: SHOW_MODAL,
  payload: true
});

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: false
});
