import { getListSuccess } from '../../actions/';
import list from '../../reducers/list';

const lostNumbers = [4, 8, 15, 16, 23, 42];

describe('list reducer', () => {
  it('initiates correctly', () => {
    expect(list(undefined, {})).toEqual([]);
  });

  it('changes on GET_LIST_SUCCESS', () => {
    expect(list(undefined, getListSuccess(lostNumbers))).toEqual(lostNumbers);
  });

  it('does not change on other action type', () => {
    expect(list(lostNumbers, { type: 'SOME_OTHER_ACTION' })).toEqual(
      lostNumbers
    );
  });
});
