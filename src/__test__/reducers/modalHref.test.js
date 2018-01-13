import { showModal, hideModal } from '../../actions/';
import modalHref from '../../reducers/modalHref';

const atariHref = 'http://atarionline.pl';

describe('modalHref reducer', () => {
  it('initiates correctly', () => {
    expect(modalHref(undefined, {})).toEqual(false);
  });

  it('changes on SHOW_MODAL', () => {
    expect(modalHref(undefined, showModal(atariHref))).toEqual(atariHref);
  });

  it('resets on GET_LIST_REQUEST', () => {
    expect(modalHref(atariHref, hideModal())).toEqual(false);
  });

  it('ignores some other action', () => {
    expect(modalHref(atariHref, { type: 'SOME_OTHER_ACTION' })).toEqual(
      atariHref
    );
  });
});
