import { SHOW_MODAL, HIDE_MODAL } from '../constants/';

const modalHref = (state = false, { type, href }) => {
  switch (type) {
    case SHOW_MODAL:
      return href;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
};
export default modalHref;
