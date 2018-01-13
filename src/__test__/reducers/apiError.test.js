import { getListRequest, getListFailure } from '../../actions/';
import apiError from '../../reducers/apiError';

const fluxError = 'Flux capacitor jam';

describe('apiError reducer', () => {
  it('initiates correctly', () => {
    expect(apiError(undefined, {})).toEqual(false);
  });

  it('changes on GET_LIST_FAILURE', () => {
    expect(apiError(undefined, getListFailure(fluxError))).toEqual(fluxError);
  });

  it('resets on GET_LIST_REQUEST', () => {
    expect(apiError(fluxError, getListRequest())).toEqual(false);
  });

  it('ignores some other action', () => {
    expect(apiError(fluxError, { type: 'SOME_OTHER_ACTION' })).toEqual(
      fluxError
    );
  });
});
